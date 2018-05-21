import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";
import * as firebase from "firebase";
// import * as $ from "jquery";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {


  userId: string = '';
  routeState: any = "";
  currentUpdateKey: string = "";
  contactsRef: any;
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
  contactType: Array<string> = [];
  principleType: Array<string> = [];
  propertyMarkets: Array<string> = [];
  propertyTypes: Array<string> = [];

  contactTypeSelected: Array<any> = [];
  principleTypeSelected: Array<any> = [];
  propertyMarketsSelected: Array<any> = [];
  propertyTypesSelected: Array<any> = [];

  contactId: string = '';

  file: any;
  url: any = "";

  private valueContactType:any = [];
  private valueUpdateContactType:any = [];
  private valuePropertyMarkets:any = [];
  private valuePropertyTypes:any = [];
  private valueprincipleType:string = '';
  private valueUpdatePrincipleType:string = '';

  constructor( public toastr: ToastsManager, vcr: ViewContainerRef, public af: AngularFireDatabase,  public router: Router) { }

  ngOnInit() {
    this.contactType = ["Broker","General Contractor","Architect","Developer","Principle","Attorney","Lender","Escrow Officer","Appraiser","Manager"];
    this.principleType = ["Developer","Government Representative","Institutional Investor","Private Investor","Professional Investor"];
    this.propertyMarkets = ["Central Northeast","Damascus","East Portlandr","Troutdale/Gresham","Yamhill County"];
    this.propertyTypes = ["Healthcare","Hospitality","Industrial","Multifamily","Retail","Office","Land","Mixed-Use","Self-Storage","Mobile/RV Parks","Specialty"];

    this.routeState = this.router.getNavigatedData();
    this.contactsRef = firebase.database().ref("/crm/contacts");
    if(this.routeState) {
      if(this.routeState[0]) {
        if (this.routeState[0]['contactId'] != '') {
          this.contactId = this.routeState[0]['contactId'];
          this.loadEdit(this.routeState[0]['contactId']);
        }
        else{
          this.router.navigate(['contacts']);
        }
      }
      else{
        this.router.navigate(['contacts']);
      }
    }
    else{
      this.router.navigate(['contacts']);
    }

    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.userId = user.uid;

      } else {
        // No user is signed in.
      }
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
      this.updateContactPicture();
    }
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

      console.log(this.updatedContact);

    });
  }



  onBlurFirstName(e){
    this.updatedContact.firstName = e;
    this.updateContact();
  }

  onBlurMiddleName(e){
    this.updatedContact.middleName = e;
    this.updateContact();
  }

  onBlurLastName(e){
    this.updatedContact.lastName = e;
    this.updateContact();
  }

  onBlurCompanyName(e){
    this.updatedContact.companyName = e;
    this.updateContact();
  }

  onBlurOccupation(e){
    this.updatedContact.occupation = e;
    this.updateContact();
  }

  onBlurBirthDate(e){
    this.updatedContact.birthdate = e;
    this.updateContact();
  }

  onBlurTitle(e){
    this.updatedContact.title = e;
    this.updateContact();
  }

  onBlurPhoneNumber(e){
    this.updatedContact.phoneNumber = e;
    this.updateContact();
  }

  onBlurExt(e){
    this.updatedContact.ext = e;
    this.updateContact();
  }

  onBlurMobileNumber(e){
    this.updatedContact.mobileNumber = e;
    this.updateContact();
  }

  onBlurHomeNumber(e){
    this.updatedContact.homeNumber = e;
    this.updateContact();
  }

  onBlurFaxNumber(e){
    this.updatedContact.faxNumber = e;
    this.updateContact();
  }

  onBlurPrimaryEmail(e){
    this.updatedContact.primaryEmail = e;
    this.updateContact();
  }

  onBlurContactWebsite(e){
    this.updatedContact.contactWebsite = e;
    this.updateContact();
  }

  onBlurMailingStreet(e){
    this.updatedContact.mailingStreet = e;
    this.updateContact();
  }

  onBlurMailingCity(e){
    this.updatedContact.mailingCity = e;
    this.updateContact();
  }

  onBlurMailingZip(e){
    this.updatedContact.mailingZip = e;
    this.updateContact();
  }

  onBlurMailingState(e){
    this.updatedContact.mailingState = e;
    this.updateContact();
  }

  onBlurMailingCountry(e){
    this.updatedContact.mailingCountry = e;
    this.updateContact();
  }

  onBlurContactNotes(e){
    this.updateContact();
  }


  public refreshValueUpdateContactType(value:any):void {
    this.valueUpdateContactType = [];
    value.forEach((element)=> {
      this.valueUpdateContactType.push(element.id);
      this.updateContact();
    });

  }

  public refreshValueUpdatePrincipalType(value:any):void {
    this.valueUpdatePrincipleType = value.id;
    this.updateContact();
  }

  public refreshValueUpdatePropertyMarkets(value:any):void {
    this.valuePropertyMarkets = [];
    value.forEach((element)=> {
      this.valuePropertyMarkets.push(element.id);
      this.updateContact();
    });
  }

  public refreshValueUpdatePropertyTypes(value:any):void {
    this.valuePropertyTypes = [];
    value.forEach((element)=> {
      this.valuePropertyTypes.push(element.id);
      this.updateContact();
    });
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  updateContactPicture(){
    if(typeof this.file != 'undefined' ){
      firebase.storage().ref().child('/crm/contacts/'+this.makeid()+'.png').put(this.file).then(snapshot => {
        this.updatedContact.contactPicture = snapshot.downloadURL;
        firebase.database().ref('/crm/contacts/' + this.currentUpdateKey).update(this.updatedContact).then(result => {
        });
      });
    }
  }

  updateContact(){
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
      firebase.database().ref('/crm/contacts/' + this.currentUpdateKey).update(this.updatedContact).then(result => {});
    }
  }




}
