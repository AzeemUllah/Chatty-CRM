import {Component, OnInit, ViewContainerRef} from '@angular/core';
import * as firebase from "firebase";
import {ToastsManager} from "ng2-toastr";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";
import {AngularFireStorage} from "angularfire2/storage";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyUpdateObj: any = {
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

  //Update Key temp variable
  currentUpdateKey: string = '';

  //Update pic url
  url: string = '';

  //Update image file referance variable
  file: any;

  //To pull routed data i.e company id
  routeState: any = "";

  //Push id of current company
  companyId: string = '';

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public af: AngularFireDatabase,  public router: Router, private afStorage: AngularFireStorage ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.companyRef = firebase.database().ref("/crm/company");
    //MultiSelect - ng2Select - COMPANY TYPE
    this.companyType = ["Real Estate Brokerage", "Mortgage Brokerage", "Property Management", "Developer", "Lender", "Owner/Principle", "Title Company", "Vendor", "Law", "Appraisal"];

    //MultiSelect - ng2Select - INVESTOR TYPE
    this.investorType = ["Institutional", "REIT", "Private Equity", "Syndicator", "Individual"];

    //MultiSelect - ng2Select - PROPERTY MARKETS
    this.propertyMarkets = ["Central Northeast", "Damascus", "East Portland", "Troutdale/Gresham", "Yamhill County"];

    //MultiSelect - ng2Select - PROPERTY MARKETS
    this.propertyTypes = ["Healthcare", "Hospitality", "Industrial", "Multifamily", "Retail", "Office", "Land", "Mixed-Use", "Self-Storage", "Mobile/RV Parks", "Specialty"];

    //Get User ID from Firebase Authentication
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.userId = user.uid;
      } else {
        // No user is signed in.
      }
    });

    //Pull in company id passed by company-list component
    this.routeState = this.router.getNavigatedData();
    if(this.routeState) {
      if(this.routeState[0]) {
        if (this.routeState[0]['companyId'] != '') {
          this.companyId = this.routeState[0]['companyId'];
          this.currentUpdateKey = this.routeState[0]['companyId'];
          this.loadEdit(this.routeState[0]['companyId']);
        }
        else{
          this.router.navigate(['company']);
        }
      }
      else{
        this.router.navigate(['company']);
      }
    }
    else{
      this.router.navigate(['company']);
    }

    this.companyRef = firebase.database().ref("/crm/company");

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
      this.valueUpdatePropertyMarkets = [];
      this.valueUpdatePropertyTypes = [];
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

          this.valueUpdatePropertyMarkets.push(data);
          this.valueUpdatePropertyMarkets = this.valueUpdatePropertyMarkets.slice();
        });
      }

      if(this.companyUpdateObj.propertyTypes) {
        this.companyUpdateObj.propertyTypes.forEach((data) => {
          this.propertyTypesSelected.push({text: data, id: data});
          this.propertyTypesSelected = this.propertyTypesSelected.slice();

          this.valueUpdatePropertyTypes.push(data);
          this.valueUpdatePropertyTypes = this.valueUpdatePropertyTypes.slice();
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
            this.loadEdit(this.currentUpdateKey);
          }).catch((error)=>{
            console.log(error);
          });
        }).catch((error)=>{console.log(error);});
      }else{
        if(!this.companyUpdateObj.contactPicture){
          this.companyUpdateObj.contactPicture = this.url;
        }
        firebase.database().ref('/crm/company/' + this.currentUpdateKey).update(this.companyUpdateObj).then(result => {
          this.url = "./../../../../../assets/images/user.jpg";
          this.loadEdit(this.currentUpdateKey);
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
      this.updateCompany();
    }
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
    this.updateCompany();
  }

  //MultiSelect - ng2Select - INVESTOR TYPE
  public refreshValueInvestorType(value:any):void {
    this.valueInvestorType = value.id;
  }

  public refreshValueUpdateInvestorType(value:any):void {
    this.valueUpdateInvestorType = value.id;
    this.updateCompany();
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
    this.updateCompany();
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
    this.updateCompany();
  }


  onBlurCompanyName(e){
    this.companyUpdateObj.companyName = e;
    this.updateCompany();
  }

  onBlurCompanyStreet(e){
    this.companyUpdateObj.companyStreet = e;
    this.updateCompany();
  }

  onBlurCompanyCity(e){
    this.companyUpdateObj.companyCity = e;
    this.updateCompany();
  }

  onBlurCompanyState(e){
    this.companyUpdateObj.companyState = e;
    this.updateCompany();
  }

  onBlurCompanyCountry(e){
    this.companyUpdateObj.companyCountry = e;
    this.updateCompany();
  }

  onBlurCompanyZip(e){
    this.companyUpdateObj.companyZip = e;
    this.updateCompany();
  }

  onBlurCompanyPhone(e){
    this.companyUpdateObj.companyPhone = e;
    this.updateCompany();
  }

  onBlurCompanyFax(e){
    this.companyUpdateObj.companyFax = e;
    this.updateCompany();
  }

  onBlurCompanyEmail(e){
    this.companyUpdateObj.companyEmail = e;
    this.updateCompany();
  }

  onBlurCompanyWebsite(e){
    this.companyUpdateObj.companyWebsite = e;
    this.updateCompany();
  }

  onBlurDescription(e){
    this.updateCompany();
  }







}
