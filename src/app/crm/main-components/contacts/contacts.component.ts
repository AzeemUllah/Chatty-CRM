import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { Router} from '@angular/router';
import {ToastsManager} from "ng2-toastr";
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from "firebase";
import * as $ from "jquery";
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs/Subject";
import {AngularFireStorage} from "angularfire2/storage";
import {noUndefined} from "@angular/compiler/src/util";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // rows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' },
  // ];
  // columns = [
  //   { prop: 'name' },
  //   { name: 'Gender' },
  //   { name: 'Company' }
  // ];

  imageUrl: string = '';
  file: any;
  url: any = "";

  contactType: Array<string> = [];

  contactTypeSelected: Array<any> = [];
  principleTypeSelected: Array<any> = [];
  propertyMarketsSelected: Array<any> = [];
  propertyTypesSelected: Array<any> = [];

  principleType: Array<string> = [];
  propertyMarkets: Array<string> = [];
  propertyTypes: Array<string> = [];

  private valueContactType:any = [];
  private valueUpdateContactType:any = [];
  private valuePropertyMarkets:any = [];
  private valuePropertyTypes:any = [];
  private valueprincipleType:string = '';
  private valueUpdatePrincipleType:string = '';

  contactsRef: any;

  currentUpdateKey: string = "";
  currentDeleteKey: string = "";

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();

  dtOptions: DataTables.Settings = {};

  contactsList:Array<string> = [];
  newContact: any;

  userId: string = '';

  updatedContact: any = {
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "title": "",
      "contactPicture": "",
      "companyName": "",
      "birthdate": "",
      "occupation": "",
      "phoneNumber": "",
      "ext": "",
      "mobileNumber": "",
      "homeNumber": "",
      "faxNumber": "",
      "primaryEmail": "",
      "contactWebsite": "",
      "mailingStreet": "",
      "mailingCity": "",
      "mailingZip": "",
      "mailingState": "",
      "mailingCountry": "",
      "contactType": "",
      "principleType": "",
      "propertyMarkets": "",
      "propertyTypes": "",
      "contactNotes": "",
      "doNotCall": "",
      "verified": "",
      "emailOptOut": "",
      "research": "",
      "faxOptOut": "",
      "newsletter": "",
      "createdBy": "",
      "createTime": "",
      "updatedBy": "",
      "updateTime": ""
  };

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public af: AngularFireDatabase,  public router: Router, private afStorage: AngularFireStorage ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.contactType = ["Broker","General Contractor","Architect","Developer","Principle","Attorney","Lender","Escrow Officer","Appraiser","Manager"];
    this.principleType = ["Developer","Government Representative","Institutional Investor","Private Investor","Professional Investor"];
    this.propertyMarkets = ["Central Northeast","Damascus","East Portlandr","Troutdale/Gresham","Yamhill County"];
    this.propertyTypes = ["Healthcare","Hospitality","Industrial","Multifamily","Retail","Office","Land","Mixed-Use","Self-Storage","Mobile/RV Parks","Specialty"];
    //
    // setTimeout(() => {
    //   this.dtTrigger.next();
    // },2500);
    this.contactsRef = firebase.database().ref("/crm/contacts");
    // contactsRef.on('child_added', (snapshot) => {
    //   this.contactsList.push(snapshot.val());
    //   // this.rerenderDatatable();
    //   console.log(this.contactsList);
    // });


    this.contactsRef.on('value', (snapshot) => {
      //console.log(snapshot.val());
      // this.contactsList = snapshot.val();
      // snapshot.forEach((data)=>{
      //   var child = data;
      //   this.contactsList.push(child.val());
      // });
      this.contactsList = [];
      var count = 0;
      for (var key in snapshot.val()) {
        var temp = snapshot.val()[key];
        temp.rowId = key;
        var lastIndex = this.contactsList.push(temp) -1;
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

    this.initNewContact();

    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.userId = user.uid;

      } else {
        // No user is signed in.
      }
    });

    this.dtOptions = {
      paging: false
    };
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  createContact(){
    if(this.newContact.firstName.length <= 0){
      this.toastr.error('First Name required.', 'Error!');
    }
    else if(this.newContact.lastName.length <= 0){
      this.toastr.error('Last Name required.', 'Error!');
    }
    else{
      this.newContact.contactType = this.valueContactType;
      this.newContact.principleType = this.valueprincipleType;
      this.newContact.createTime = firebase.database.ServerValue.TIMESTAMP;
      this.newContact.createdBy = this.userId;
      firebase.database().ref('/crm/contacts/').push(this.newContact).then(result=>{
        $(".close").trigger("click");
        this.initNewContact();
        this.toastr.success('New contact added.', 'Sucess!');
      });
    }
  }

  initNewContact(){
    this.newContact = {
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "title": "",
      "contactPicture": "",
      "companyName": "",
      "birthdate": "",
      "occupation": "",
      "phoneNumber": "",
      "ext": "",
      "mobileNumber": "",
      "homeNumber": "",
      "faxNumber": "",
      "primaryEmail": "",
      "contactWebsite": "",
      "mailingStreet": "",
      "mailingCity": "",
      "mailingZip": "",
      "mailingState": "",
      "mailingCountry": "",
      "contactType": "",
      "principleType": "",
      "propertyMarkets": "",
      "propertyTypes": "",
      "contactNotes": "",
      "doNotCall": "",
      "verified": "",
      "emailOptOut": "",
      "research": "",
      "faxOptOut": "",
      "newsletter": "",
      "createdBy": "",
      "createTime": "",
      "updatedBy": "",
      "updateTime": "",
      "lastContactDate": ""
    };
  }

  public refreshValueContactType(value:any):void {
    this.valueContactType = [];
    value.forEach((element)=> {
      this.valueContactType.push(element.id);
    });
  }

  public refreshValuePrincipalType(value:any):void {
    this.valueprincipleType = value.id;
  }

  loadEdit(id){
    this.currentUpdateKey = id;

    this.contactsRef.child(id).once('value', (snapshot) => {

      this.updatedContact = {
        "firstName": snapshot.val()["firstName"],
        "lastName": snapshot.val()["lastName"],
        "middleName": snapshot.val()["middleName"],
        "title": snapshot.val()["title"],
        "contactPicture": snapshot.val()["contactPicture"],
        "companyName": snapshot.val()["companyName"],
        "birthdate": snapshot.val()["birthdate"],
        "occupation": snapshot.val()["occupation"],
        "phoneNumber": snapshot.val()["phoneNumber"],
        "ext": snapshot.val()["ext"],
        "mobileNumber": snapshot.val()["mobileNumber"],
        "homeNumber": snapshot.val()["homeNumber"],
        "faxNumber": snapshot.val()["faxNumber"],
        "primaryEmail": snapshot.val()["primaryEmail"],
        "contactWebsite": snapshot.val()["contactWebsite"],
        "mailingStreet": snapshot.val()["mailingStreet"],
        "mailingCity": snapshot.val()["mailingCity"],
        "mailingZip": snapshot.val()["mailingZip"],
        "mailingState": snapshot.val()["mailingState"],
        "mailingCountry": snapshot.val()["mailingCountry"],
        "contactType": snapshot.val()["contactType"],
        "principleType": snapshot.val()["principleType"],
        "propertyMarkets": snapshot.val()["propertyMarkets"],
        "propertyTypes": snapshot.val()["propertyTypes"],
        "contactNotes": snapshot.val()["contactNotes"],
        "doNotCall": snapshot.val()["doNotCall"],
        "verified": snapshot.val()["verified"],
        "emailOptOut": snapshot.val()["emailOptOut"],
        "research": snapshot.val()["research"],
        "faxOptOut": snapshot.val()["faxOptOut"],
        "newsletter": snapshot.val()["newsletter"],
        "createdBy": snapshot.val()["createdBy"],
        "createTime": snapshot.val()["createTime"],
        "updatedBy": snapshot.val()["updatedBy"],
        "updateTime": snapshot.val()["updateTime"]
      };

      this.contactTypeSelected = [];
      this.principleTypeSelected = [];
      this.propertyMarketsSelected = [];
      this.propertyTypesSelected = [];
      this.url = this.updatedContact.contactPicture;
      this.valueUpdateContactType = [];
      this.valuePropertyMarkets = [];
      this.valuePropertyTypes = [];
      this.valueUpdatePrincipleType = '';

      if(this.updatedContact.contactType) {
        this.updatedContact.contactType.forEach((data) => {
          this.contactTypeSelected.push({text: data, id: data});
          this.contactTypeSelected = this.contactTypeSelected.slice();
          this.valueUpdateContactType.push(data);
          this.valueUpdateContactType = this.valueUpdateContactType.slice();
        });
      }

      if(this.updatedContact.principleType) {
        this.principleTypeSelected.push({
          text: this.updatedContact.principleType,
          id: this.updatedContact.principleType
        });
        this.principleTypeSelected = this.principleTypeSelected.slice();
        this.valueUpdatePrincipleType = this.updatedContact.principleType;
      }

      if(this.updatedContact.propertyMarkets) {
        this.updatedContact.propertyMarkets.forEach((data) => {
          this.propertyMarketsSelected.push({text: data, id: data});
          this.propertyMarketsSelected = this.propertyMarketsSelected.slice();
          this.valuePropertyMarkets.push(data);
          this.valuePropertyMarkets = this.valuePropertyMarkets.slice();
        });
      }

      if(this.updatedContact.propertyTypes) {
        this.updatedContact.propertyTypes.forEach((data) => {
          this.propertyTypesSelected.push({text: data, id: data});
          this.propertyTypesSelected = this.propertyTypesSelected.slice();
          this.valuePropertyTypes.push(data);
          this.valuePropertyTypes = this.valuePropertyTypes.slice();
        });
      }








    });
  }

  updateContact(){
    console.log(this.valueUpdateContactType);
    if(this.updatedContact.firstName.length <= 0){
      this.toastr.error('First Name required.', 'Error!');
    }
    else if(this.updatedContact.lastName.length <= 0){
      this.toastr.error('Last Name required.', 'Error!');
    }
    else{
      this.updatedContact.contactType = this.valueUpdateContactType;
      this.updatedContact.principleType = this.valueUpdatePrincipleType;
      this.updatedContact.propertyMarkets = this.valuePropertyMarkets;
      this.updatedContact.propertyTypes = this.valuePropertyTypes;
      this.updatedContact.updateTime = firebase.database.ServerValue.TIMESTAMP;
      this.updatedContact.updatedBy = this.userId;
      this.updatedContact.birthdate = $("#birthDate").val();

      console.log(typeof this.file);

      if(typeof this.file != 'undefined' ){
        console.log("here");
        firebase.storage().ref().child('/crm/contacts/'+this.makeid()+'.png').put(this.file).then(snapshot => {
          this.updatedContact.contactPicture = snapshot.downloadURL;
          firebase.database().ref('/crm/contacts/' + this.currentUpdateKey).update(this.updatedContact).then(result => {
            $(".close").trigger("click");
            this.initNewContact();
            this.toastr.success('Contact updated!.', 'Sucess!');
          });
        });
      }else{
        if(!this.updatedContact.contactPicture){
          this.updatedContact.contactPicture = this.url;
        }

        console.log("here2");
        firebase.database().ref('/crm/contacts/' + this.currentUpdateKey).update(this.updatedContact).then(result => {
          $(".close").trigger("click");
          this.initNewContact();
          this.toastr.success('Contact updated!.', 'Sucess!');
          this.url = "./../../../../assets/images/user.jpg";
        });
      }

    }
  }

  public refreshValueUpdateContactType(value:any):void {
    this.valueUpdateContactType = [];
    value.forEach((element)=> {
      this.valueUpdateContactType.push(element.id);
      console.log(this.valueUpdateContactType);
    });

  }

  public refreshValueUpdatePrincipalType(value:any):void {
    this.valueUpdatePrincipleType = value.id;
  }

  public refreshValueUpdatePropertyMarkets(value:any):void {
    this.valuePropertyMarkets = [];
    value.forEach((element)=> {
      this.valuePropertyMarkets.push(element.id);
    });
  }

  public refreshValueUpdatePropertyTypes(value:any):void {
    this.valuePropertyTypes = [];
    value.forEach((element)=> {
      this.valuePropertyTypes.push(element.id);
    });
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
    console.log(this.file);
  }

  loadDelete(id){
    this.currentDeleteKey = id;
  }

  deleteContact(){
    this.contactsRef.child(this.currentDeleteKey).remove().then(()=>{
      this.toastr.success('Contact deleted!.', 'Sucess!');
    }).catch(()=>{
      this.toastr.error('Error deleting contact!.', 'Error!');
    });
  }
  // rerenderDatatable(): void {
  //
  //   setTimeout(() => {
  //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //       dtInstance.destroy();
  //       this.dtTrigger.next();
  //     });
  //   },4000);
  //
  //
  // }

}
