import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs/Subject";
import {AngularFireStorage} from "angularfire2/storage";
import {ToastsManager} from "ng2-toastr";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companyList:Array<string> = [];

  companyUpdateObj: any = {};

  companyAddObj: any = {};

  //Datatables config and setup
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};

  //MultiSelect - ng2Select - COMPANY TYPE
  companyType: Array<string> = [];
  companyTypeSelected: Array<any> = [];
  private valueCompanyType:any = [];
  private valueUpdateCompanyType:any = [];

  //MultiSelect - ng2Select - INVESTOR TYPE
  investorTypeSelected: Array<any> = [];
  investorType: Array<string> = [];
  private valueInvestorType:string = '';
  private valueUpdateInvestorType:string = '';

  //MultiSelect - ng2Select - PROPERTY MARKETS
  propertyMarketsSelected: Array<any> = [];
  propertyMarkets: Array<string> = [];
  private valuePropertyMarkets:any = [];
  private valueUpdatePropertyMarkets:any = [];

  //MultiSelect - ng2Select - PROPERTY TYPES
  propertyTypesSelected: Array<any> = [];
  propertyTypes: Array<string> = [];
  private valuePropertyTypes:any = [];
  private valueUpdatePropertyTypes:any = [];

  // Firebase Referance
  companyRef: any;

  //Support Variables
  userId: string = '';

  //Delete Key temp variable
  currentDeleteKey: string = '';

  //Update Key temp variable
  currentUpdateKey: string = '';
  //Update pic url
  url: string = '';
  //Update image file referance variable
  file: any;
  //Stores view type i.e. block or table view
  pivot: boolean = false;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public af: AngularFireDatabase,  public router: Router, private afStorage: AngularFireStorage ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    //Initilize compulsry variables
    this.initNewCompany();

    //MultiSelect - ng2Select - COMPANY TYPE
    this.companyType = ["Real Estate Brokerage", "Mortgage Brokerage", "Property Management", "Developer", "Lender", "Owner/Principle", "Title Company", "Vendor", "Law", "Appraisal"];

    //MultiSelect - ng2Select - INVESTOR TYPE
    this.investorType = ["Institutional", "REIT", "Private Equity", "Syndicator", "Individual"];

    //MultiSelect - ng2Select - PROPERTY MARKETS
    this.propertyMarkets = ["Central Northeast", "Damascus", "East Portland", "Troutdale/Gresham", "Yamhill County"];

    //MultiSelect - ng2Select - PROPERTY MARKETS
    this.propertyTypes = ["Healthcare", "Hospitality", "Industrial", "Multifamily", "Retail", "Office", "Land", "Mixed-Use", "Self-Storage", "Mobile/RV Parks", "Specialty"];

    // Datatables post config
    this.dtOptions = {
      paging: false
    };

    //Get User ID from Firebase Authentication
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.userId = user.uid;

      } else {
        // No user is signed in.
      }
    });

    //Fill table from firebase
    this.companyRef = firebase.database().ref("/crm/company");
    this.companyRef.on('value', (snapshot) => {
      this.companyList = [];
      var count = 0;
      for (var key in snapshot.val()) {
        var temp = snapshot.val()[key];
        temp.rowId = key;
        var lastIndex = this.companyList.push(temp) -1;
        count++;
        if(snapshot.numChildren() == count){
          if(!this.dtElement){
            setTimeout(()=>{
              this.dtTrigger.next();
              this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.destroy();
                setTimeout(()=>{this.dtTrigger.next();});
              });
            });
          }
        }
      }
    });
  }


  //Initilize and Reinitilize Add company object
  initNewCompany(){
    this.companyAddObj = {
      'companyName': '',
      'companyType': '',
      'companyPhone': '',
      'companyFax': '',
      'companyEmail': '',
      'companyWebsite': '',
      'investorType': '',
      'companyStreet': '',
      'companyCity': '',
      'companyZip': '',
      'companyState': '',
      'companyCountry': '',
      'description': '',
      'propertyMarkets': '',
      'propertyTypes': '',
      "createdBy": "",
      "createTime": "",
      "updatedBy": "",
      "updateTime": "",
      "contactPicture": ""
    };

    this.companyUpdateObj = {
      'companyName': '',
      'companyType': '',
      'companyPhone': '',
      'companyFax': '',
      'companyEmail': '',
      'companyWebsite': '',
      'investorType': '',
      'companyStreet': '',
      'companyCity': '',
      'companyZip': '',
      'companyState': '',
      'companyCountry': '',
      'description': '',
      'propertyMarkets': '',
      'propertyTypes': '',
      "createdBy": "",
      "createTime": "",
      "updatedBy": "",
      "updateTime": "",
      "contactPicture": ""
    }
  }


  //Add a new company
  addCompany(){
    //Compulsary field check
    if(this.companyAddObj.companyName.length <= 0){
      this.toastr.error('First Name required.', 'Error!');
    }
    else{
      //Multi-select value extraction
      this.companyAddObj.companyType = this.valueCompanyType;
      this.companyAddObj.investorType = this.valueInvestorType;
      this.companyAddObj.propertyMarkets = this.valuePropertyMarkets;
      this.companyAddObj.propertyTypes = this.valuePropertyTypes;
      //Record meta data
      this.companyAddObj.createTime = firebase.database.ServerValue.TIMESTAMP;
      this.companyAddObj.createdBy = this.userId;

      firebase.database().ref('/crm/company/').push(this.companyAddObj).then(result=>{
        $(".close").trigger("click");
        this.initNewCompany();
        this.toastr.success('New company added.', 'Sucess!');
      });
    }
  }

  //Support function to temporally store item id to be deleted.
  loadDelete(id){
    this.currentDeleteKey = id;
  }

  loadEdit(id){
    this.currentUpdateKey = id;

    this.companyRef.child(id).once('value', (snapshot) => {

      this.companyUpdateObj = {
        "companyName": snapshot.val()["companyName"],
        "companyType": snapshot.val()["companyType"],
        "companyPhone": snapshot.val()["companyPhone"],
        "companyFax": snapshot.val()["companyFax"],
        "companyEmail": snapshot.val()["companyEmail"],
        "companyWebsite": snapshot.val()["companyWebsite"],
        "investorType": snapshot.val()["investorType"],
        "companyStreet": snapshot.val()["companyStreet"],
        "companyCity": snapshot.val()["companyCity"],
        "companyZip": snapshot.val()["companyZip"],
        "companyState": snapshot.val()["companyState"],
        "companyCountry": snapshot.val()["companyCountry"],
        "description": snapshot.val()["description"],
        "propertyMarkets": snapshot.val()["propertyMarkets"],
        "propertyTypes": snapshot.val()["propertyTypes"],
        "createdBy": snapshot.val()["createdBy"],
        "createTime": snapshot.val()["createTime"],
        "updatedBy": snapshot.val()["updatedBy"],
        "updateTime": snapshot.val()["updateTime"],
        "contactPicture": snapshot.val()["contactPicture"],
      };

      this.companyTypeSelected = [];
      this.investorTypeSelected = [];
      this.propertyMarketsSelected = [];
      this.propertyTypesSelected = [];

      this.url = this.companyUpdateObj.contactPicture;

      this.valueUpdateCompanyType = [];
      this.valuePropertyMarkets = [];
      this.valuePropertyTypes = [];
      this.valueUpdateInvestorType = '';

      if(this.companyUpdateObj.companyType) {
        this.companyUpdateObj.companyType.forEach((data) => {
          this.companyTypeSelected.push({text: data, id: data});
          this.companyTypeSelected = this.companyTypeSelected.slice();
          this.valueUpdateCompanyType.push(data);
          this.valueUpdateCompanyType = this.valueUpdateCompanyType.slice();
        });
      }

      if(this.companyUpdateObj.investorType) {
        this.investorTypeSelected.push({
          text: this.companyUpdateObj.investorType,
          id: this.companyUpdateObj.investorType
        });
        this.investorTypeSelected = this.investorTypeSelected.slice();
        this.valueUpdateInvestorType = this.companyUpdateObj.investorType;
      }

      if(this.companyUpdateObj.propertyMarkets) {
        this.companyUpdateObj.propertyMarkets.forEach((data) => {
          this.propertyMarketsSelected.push({text: data, id: data});
          this.propertyMarketsSelected = this.propertyMarketsSelected.slice();
          this.valuePropertyMarkets.push(data);
          this.valuePropertyMarkets = this.valuePropertyMarkets.slice();
        });
      }

      if(this.companyUpdateObj.propertyTypes) {
        this.companyUpdateObj.propertyTypes.forEach((data) => {
          this.propertyTypesSelected.push({text: data, id: data});
          this.propertyTypesSelected = this.propertyTypesSelected.slice();
          this.valuePropertyTypes.push(data);
          this.valuePropertyTypes = this.valuePropertyTypes.slice();
        });
      }
    });
  }

  //Helper function - generates unique random id for images being uploaded to firebase storage
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  updateCompany(){
    if(this.companyUpdateObj.companyName.length <= 0){
      this.toastr.error('Company name required.', 'Error!');
    }
    else{
      this.companyUpdateObj.companyType = this.valueUpdateCompanyType;
      this.companyUpdateObj.investorType = this.valueUpdateInvestorType;
      this.companyUpdateObj.propertyMarkets = this.valueUpdatePropertyMarkets;
      this.companyUpdateObj.propertyTypes = this.valueUpdatePropertyTypes;
      this.companyUpdateObj.updateTime = firebase.database.ServerValue.TIMESTAMP;
      this.companyUpdateObj.updatedBy = this.userId;

      if(typeof this.file != 'undefined' ){
        firebase.storage().ref().child('/crm/company/'+this.makeid()+'.png').put(this.file).then(snapshot => {
          this.companyUpdateObj.contactPicture = snapshot.downloadURL;
          firebase.database().ref('/crm/company/' + this.currentUpdateKey).update(this.companyUpdateObj).then(result => {
            $(".close").trigger("click");
            this.initNewCompany();
            this.toastr.success('Company updated!.', 'Sucess!');
          }).catch((error)=>{
            console.log(error);
          });
        }).catch((error)=>{console.log(error);});
      }else{
        if(!this.companyUpdateObj.contactPicture){
          this.companyUpdateObj.contactPicture = this.url;
        }
        firebase.database().ref('/crm/company/' + this.currentUpdateKey).update(this.companyUpdateObj).then(result => {
          $(".close").trigger("click");
          this.initNewCompany();
          this.toastr.success('Company updated!.', 'Sucess!');
          this.url = "./../../../../../assets/images/user.jpg";
        });
      }
    }
  }

  uploadFile(event) {
    this.file = event.srcElement.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  //Function to toggle between two diffrent kinds of table view, i.e. Block and List view
  pivotTable(viewType){
    if(viewType == 'block'){
      this.pivot = true;
    }else{
      this.pivot = false;
    }
  }

  //Function to view company details page - navigates using services so that id is not displayed in URL
  gotoCompanyDetails(id){
    this.router.navigateByData({
      url: ["company/company-details"],
      data: [{"companyId": id}]
    });
  }


  //Delete Company main function called when modal conformed.
  deleteCompany(){
    this.companyRef.child(this.currentDeleteKey).remove().then(()=>{
      this.toastr.success('Company deleted!.', 'Sucess!');
    }).catch(()=>{
      this.toastr.error('Error deleting company!.', 'Error!');
    });
  }

  //MultiSelect - ng2Select - COMPANY TYPE
  public refreshValueCompanyType(value:any):void {
    this.valueCompanyType = [];
    value.forEach((element)=> {
      this.valueCompanyType.push(element.id);
    });
  }

  public refreshValueUpdateCompanyType(value:any):void {
    this.valueUpdateCompanyType = [];
    value.forEach((element)=> {
      this.valueUpdateCompanyType.push(element.id);
    });
  }

  //MultiSelect - ng2Select - INVESTOR TYPE
  public refreshValueInvestorType(value:any):void {
    this.valueInvestorType = value.id;
  }

  public refreshValueUpdateInvestorType(value:any):void {
    this.valueUpdateInvestorType = value.id;
  }

  //MultiSelect - ng2Select - PROPERTY MARKETS
  public refreshValuePropertyMarkets(value:any):void {
    this.valuePropertyMarkets = [];
    value.forEach((element)=> {
      this.valuePropertyMarkets.push(element.id);
    });
  }

  public refreshValueUpdatePropertyMarkets(value:any):void {
    this.valueUpdatePropertyMarkets = [];
    value.forEach((element)=> {
      this.valueUpdatePropertyMarkets.push(element.id);
    });
  }

  //MultiSelect - ng2Select - PROPERTY TYPES
  public refreshValuePropertyTypes(value:any):void {
    this.valuePropertyTypes = [];
    value.forEach((element)=> {
      this.valuePropertyTypes.push(element.id);
    });
  }

  public refreshValueUpdatePropertyTypes(value:any):void {
    this.valueUpdatePropertyTypes = [];
    value.forEach((element)=> {
      this.valueUpdatePropertyTypes.push(element.id);
    });
  }


}
