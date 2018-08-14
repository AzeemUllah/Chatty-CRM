import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";
import {AngularFireStorage} from "angularfire2/storage";
import * as firebase from "firebase";
import {Subject} from "rxjs/Subject";
import {DataTableDirective} from "angular-datatables";
import {SelectComponent} from "ng2-select";
import {google} from "@agm/core/services/google-maps-types";


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  propertyList:Array<string> = [];

  propertyUpdateObj: any = {};

  multiSelectRef: any;

  propertyAddObj: any = {};

  recordType: Array<string> = [];
  recordTypeSelected: Array<any> = [];
  private valueRecordType:string = '';
  private valueUpdateRecordType:string = '';

  state: Array<string> = [];
  stateSelected: Array<any> = [];
  private valueState:string = '';
  private valueUpdateState:string = '';

  county: Array<string> = [];
  countySelected: Array<any> = [];
  private valueCounty:string = '';
  private valueUpdateCounty:string = '';

  msa: Array<string> = [];
  msaSelected: Array<any> = [];
  private valueMsa:string = '';
  private valueUpdateMsa:string = '';

  market: Array<string> = [];
  market1: Array<string> = [];
  market2: Array<string> = [];
  marketSelected: Array<any> = [];
  private valueMarket:string = '';
  private valueUpdateMarket:string = '';

  submarket: Array<string> = [];
  submarket1: Array<string> = [];
  submarket2: Array<string> = [];
  submarketSelected: Array<any> = [];
  private valueSubmarket:string = '';
  private valueUpdateSubmarket:string = '';

  primaryUse: Array<string> = [];
  primaryUseSelected: Array<any> = [];
  private valuePrimaryUse:string = '';
  private valueUpdatePrimaryUse:string = '';

  propertyStatus: Array<string> = [];
  propertyStatusSelected: Array<any> = [];
  private valuePropertyStatus:string = '';
  private valueUpdatePropertyStatus:string = '';

  buildingClass: Array<string> = [];
  buildingClassSelected: Array<any> = [];
  private valueBuildingClass:string = '';
  private valueUpdateBuildingClass:string = '';

  rentType: Array<string> = [];
  rentTypeSelected: Array<any> = [];
  private valueRentType:string = '';
  private valueUpdateRentType:string = '';

  construction: Array<string> = [];
  constructionSelected: Array<any> = [];
  private valueConstruction:string = '';
  private valueUpdateConstruction:string = '';

  roofType: Array<string> = [];
  roofTypeSelected: Array<any> = [];
  private valueRoofType:string = '';
  private valueUpdateRoofType:string = '';

  sidingType: Array<string> = [];
  sidingTypeSelected: Array<any> = [];
  private valueSidingType:string = '';
  private valueUpdateSidingType:string = '';

  foundationType: Array<string> = [];
  foundationTypeSelected: Array<any> = [];
  private valueFoundationType:string = '';
  private valueUpdateFoundationType:string = '';

  unitAmenities: Array<string> = [];
  unitAmenitiesSelected: Array<any> = [];
  private valueUnitAmenities:any = [];
  private valueUpdateUnitAmenities:any = [];

  siteAmenities: Array<string> = [];
  siteAmenitiesSelected: Array<any> = [];
  private valueSiteAmenities:any = [];
  private valueUpdateSiteAmenities:any = [];

  parkingType: Array<string> = [];
  parkingTypeSelected: Array<any> = [];
  private valueParkingType:string = '';
  private valueUpdateParkingType:string = '';

  primaryContact: Array<any> = [];
  primaryContactSelected: Array<any> = [];
  private valuePrimaryContact:string = '';
  private valueUpdatePrimaryContact:string = '';

  // Firebase Referance
  propertyRef: any;

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

  //Datatables config and setup
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};

  contactRef: any;



  @ViewChild('primaryContact') public select: SelectComponent;

  markerUrl: string = "./../../../../../assets/images/map-marker.png";

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public af: AngularFireDatabase,  public router: Router, private afStorage: AngularFireStorage ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.initNewProperty();

    this.recordType = ["Market",
    "Affordable/Rent Subsidized",
      "Senior Housing",
      "Student Housing",
      "Assisted Living"
      ];
    this.state = ["Washington", "Oregon"];
    this.county = ["Multnomah",
      "Clark",
      "Cowlitz",
      "Clackamas",
      "Marion",
      "Linn",
      "Lane",
      "Washington",
      "Columbia",
      "Deschutes"
      ];
    this.msa = ["Portland-Vancouver-Hillsboro",
      "Salem",
      "Longview",
      "Bend-Redmond"
      ];
      this.market = ["Kelso",
      "Longview",
      "Vancouver",
      "Outlying Cowlitz County"
      ];
    this.market1 = ["Kelso",
      "Longview",
      "Vancouver",
      "Outlying Cowlitz County"
      ];
    this.market2 = ["Bend/Central Deschutes County",
    "Redmond/North Deschutes County",
      "Central Northeast",
      "Central Salem",
      "Clackamas County",
      "Damascus",
      "East Portland",
      "East Salem",
      "Keizer",
      "Monmouth/Independence",
      "Northeast Portland",
      "North Marion County",
      "Oregon City",
      "Outlying Polk County",
      "Outlying Marion County",
      "Southeast Portland",
      "South Salem",
      "Troutdale/Gresham",
      "Vancouver",
      "West Salem",
      "Yamhill County",
      "Wilsonville"
      ]
    this.submarket = [];

    this.primaryUse = ["Garden",
      "Low-Rise",
      "Mid-Rise",
      "High-Rise"
      ];
    this.propertyStatus = ["Existing",
      "Proposed",
      "Under Construction",
      "Demolished",
      "Under Renovation"
      ];
    this.buildingClass = ["A",
      "B",
      "C",
      "D"
      ];
    this.rentType = ["Market", "Affordable/Rent Subsidized", "55+"];
    this.construction = ["Wood Frame",
      "Masonry",
      "Unreinforeced Masonry",
      "Reinforced Masonry",
      "Podium Wood",
      "Reinforced Concrete"
      ];
    this.roofType = ["Flat",
    "Pitched/Composition",
      "Pitched/Shingle",
      "Pitched/Tile",
      "Slanted",
      ];
    this.sidingType = ["Aluminum",
    "Brick",
      "Vinyl",
      "Hardy Plank",
      "T1-11",
      "Fiber Cement",
      "Wood"
      ];
    this.foundationType = ["Post & Beam",
      "Crawl",
      "Slab"
      ];

    this.parkingType = ["Off-Street", "Off-Site", "Mixed", "Carports", "Garages"];
    //this.primaryContact = ["Real Estate Brokerage", "Mortgage Brokerage", "Property Management", "Developer", "Lender", "Owner/Principle", "Title Company", "Vendor", "Law", "Appraisal"];
    //this.primaryContact = ["<a class=avatar>A</a>"];


    this.multiSelectRef = firebase.database().ref("/crm/multiSelect/property/");
    this.multiSelectRef.child("submarket/washginton/").once('value', (snapshot) => {
      this.submarket1 = [];
      for (var key in snapshot.val()) {
        this.submarket1.push(snapshot.val()[key]);
      }
    });

    this.multiSelectRef.child("submarket/oregon/").once('value', (snapshot) => {
      this.submarket2 = [];
      for (var key in snapshot.val()) {
        this.submarket2.push(snapshot.val()[key]);
      }
    });

    this.multiSelectRef.child("siteAmenities/").once('value', (snapshot) => {
      this.unitAmenities = [];
      for (var key in snapshot.val()) {
        this.unitAmenities.push(snapshot.val()[key]);
      }
    });

    this.multiSelectRef.child("unitAmenities/").once('value', (snapshot) => {
      this.siteAmenities = [];
      for (var key in snapshot.val()) {
        this.siteAmenities.push(snapshot.val()[key]);
      }
    });



    //Get User ID from Firebase Authentication
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.userId = user.uid;
      } else {
        // No user is signed in.
      }
    });

    // Datatables post config
    this.dtOptions = {
      paging: false
    };

    this.contactRef = firebase.database().ref("/crm/contacts");
    this.contactRef.once('value', (snapshot) => {
      for (var key in snapshot.val()) {
        if(!snapshot.val()[key].contactPicture || (snapshot.val()[key].contactPicture).length < 0){
          this.primaryContact.push({
            id: key,
            text: '<a class="avatar">'+(snapshot.val()[key].firstName).substr(0,1)+'</a>'+snapshot.val()[key].firstName+ ' ' + snapshot.val()[key].lastName
          });
        }
        else{
          this.primaryContact.push({
            id: key,
            text: '<a class=avatar style="height: 30px; width: 30px;"><img src="'+snapshot.val()[key].contactPicture+'"></a>'+snapshot.val()[key].firstName + ' ' + snapshot.val()[key].lastName
          });
        }
      }
    });


    //Fill table from firebase
    this.propertyRef = firebase.database().ref("/crm/property");
    this.propertyRef.on('value', (snapshot) => {
      this.propertyList = [];
      var count = 0;
      for (var key in snapshot.val()) {
        var temp = snapshot.val()[key];
        temp.rowId = key;
        var lastIndex = this.propertyList.push(temp) -1;
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

  //Function to toggle between two diffrent kinds of table view, i.e. Block and List view
  pivotTable(viewType){
    if(viewType == 'block'){
      this.pivot = true;
    }else{
      this.pivot = false;
    }
  }

  //Function to view company details page - navigates using services so that id is not displayed in URL
  gotoPropertyDetails(id){
    this.router.navigateByData({
      url: ["property/property-details"],
      data: [{"propertyId": id}]
    });
  }

  //Support function to temporally store item id to be deleted.
  loadDelete(id){
    this.currentDeleteKey = id;
  }

  loadEdit(id){
    console.log(id);
    this.currentUpdateKey = id;

    this.propertyRef.child(id).once('value', (snapshot) => {

      this.propertyUpdateObj = {
        "recordType": snapshot.val()["recordType"],
        "propertyName": snapshot.val()["propertyName"],
        "streetAddress": snapshot.val()["streetAddress"],
        "city": snapshot.val()["city"],
        "state": snapshot.val()["state"],
        "zip": snapshot.val()["zip"],
        "county": snapshot.val()["county"],
        "msa": snapshot.val()["msa"],
        "market": snapshot.val()["market"],
        "submarket": snapshot.val()["submarket"],
        "primaryUse": snapshot.val()["primaryUse"],
        "propertyStatus": snapshot.val()["propertyStatus"],
        "buildingClass": snapshot.val()["buildingClass"],
        "rentType": snapshot.val()["rentType"],
        "lastSaleDate": snapshot.val()["lastSaleDate"],
        "lastSalePrice": snapshot.val()["lastSalePrice"],
        "lastSaleCap": snapshot.val()["lastSaleCap"],
        //Resume from here
        "lastSaleType": snapshot.val()["lastSaleType"],
        "propertyManagement": snapshot.val()["propertyManagement"],
        "onSitePhone": snapshot.val()["onSitePhone"],
        "onSiteContact": snapshot.val()["onSiteContact"],
        "group": snapshot.val()["group"],
        "ownershipEntity": snapshot.val()["ownershipEntity"],
        "ownershipEntityAddress": snapshot.val()["ownershipEntityAddress"],
        "units":  snapshot.val()["units"],
        "squareFootage": snapshot.val()["squareFootage"],
        "parcelNumber": snapshot.val()["parcelNumber"],
        "landAcres": snapshot.val()["landAcres"],
        "landSf": snapshot.val()["landSf"],
        "far": snapshot.val()["far"],
        "yearBuilt": snapshot.val()["yearBuilt"],
        "yearRenovated": snapshot.val()["yearRenovated"],
        "zoning": snapshot.val()["zoning"],
        "construction": snapshot.val()["construction"],
        "roofType": snapshot.val()["roofType"],
        "sidingType": snapshot.val()["sidingType"],
        "foundationType": snapshot.val()["foundationType"],
        "numberStories": snapshot.val()["numberStories"],
        "numberBuildings": snapshot.val()["numberBuildings"],
        "website": snapshot.val()["website"],
        "unitAmenities": snapshot.val()["unitAmenities"],
        "siteAmenities": snapshot.val()["siteAmenities"],
        "masterMetered": snapshot.val()["masterMetered"],
        "individuallyMetered": snapshot.val()["individuallyMetered"],
        "parkingSpaces": snapshot.val()["parkingSpaces"],
        "parkingRatio": snapshot.val()["parkingRatio"],
        "parkingType": snapshot.val()["parkingType"],


        "garages": snapshot.val()["garages"],
        "carports": snapshot.val()["carports"],
        "pictures": snapshot.val()["pictures"],
        "primaryContact": snapshot.val()["primaryContact"],
        "forSale": snapshot.val()["forSale"],
        "primaryContactPhone": snapshot.val()["primaryContactPhone"],
        "primaryContactMobile": snapshot.val()["primaryContactMobile"],
        "primaryContactEmail": snapshot.val()["primaryContactEmail"],
        "primaryContactLastActivityDate": snapshot.val()["primaryContactLastActivityDate"],
        "createdBy": snapshot.val()["createdBy"],
        "createTime": snapshot.val()["createTime"],
        "updatedBy": snapshot.val()["updatedBy"],
        "updateTime": snapshot.val()["updateTime"],
        "lat": snapshot.val()["lat"]?snapshot.val()["lat"]:0,
        "lng": snapshot.val()["lng"]?snapshot.val()["lng"]:0
      };

      //RESUME FROM HERE
      this.recordTypeSelected = [];
      this.stateSelected = [];
      this.countySelected = [];
      this.msaSelected = [];
      this.marketSelected = [];
      this.submarketSelected = [];
      this.primaryUseSelected = [];
      this.propertyStatusSelected = [];
      this.buildingClassSelected = [];
      this.rentTypeSelected = [];
      this.constructionSelected = [];
      this.roofTypeSelected = [];
      this.sidingTypeSelected = [];
      this.foundationTypeSelected = [];
      this.unitAmenitiesSelected = [];
      this.siteAmenitiesSelected = [];
      this.parkingTypeSelected = [];
      this.primaryContactSelected = [];

      this.url = (this.propertyUpdateObj.pictures)?this.propertyUpdateObj.pictures[0]:"";

      this.valueUpdateRecordType = '';
      this.valueUpdateState = '';
      this.valueUpdateCounty = '';
      this.valueUpdateMsa = '';
      this.valueUpdateMarket = '';
      this.valueUpdateSubmarket = '';
      this.valueUpdatePrimaryUse = '';
      this.valueUpdatePropertyStatus = '';
      this.valueUpdateBuildingClass = '';
      this.valueUpdateRentType = '';
      this.valueUpdateConstruction = '';
      this.valueUpdateRoofType = '';
      this.valueUpdateSidingType = '';
      this.valueUpdateFoundationType = '';
      this.valueUpdateUnitAmenities = [];
      this.valueUpdateSiteAmenities = [];
      this.valueUpdateParkingType = '';





      // if(this.propertyUpdateObj.primaryContact) {
      //   this.contactRef.child(this.propertyUpdateObj.primaryContact).once('value', (snapshot) => {
      //     if(!snapshot.val().contactPicture || (snapshot.val().contactPicture).length < 0){
      //       this.primaryContactSelected.push({
      //         id: this.propertyUpdateObj.primaryContact,
      //         text: '<a class="avatar">'+(snapshot.val().firstName).substr(0,1)+'</a>'+snapshot.val().firstName+ ' ' + snapshot.val().lastName
      //       });
      //     }
      //     else{
      //       this.primaryContactSelected.push({
      //         id: this.propertyUpdateObj.primaryContact,
      //         text: '<a class=avatar style="height: 30px; width: 30px;"><img src="'+snapshot.val().contactPicture+'"></a>'+snapshot.val().firstName + ' ' + snapshot.val().lastName
      //       });
      //     }
      //     console.log(this.primaryContact);
      //   });
      //   this.primaryContactSelected = this.primaryContactSelected.slice();
      //   this.valueUpdatePrimaryContact = this.propertyUpdateObj.primaryContact;
      // }

      if(this.propertyUpdateObj.recordType) {
        this.recordTypeSelected.push({
          text: this.propertyUpdateObj.recordType,
          id: this.propertyUpdateObj.recordType
        });
        this.recordTypeSelected = this.recordTypeSelected.slice();
        this.valueUpdateRecordType = this.propertyUpdateObj.recordType;
      }

      if(this.propertyUpdateObj.state) {
        this.stateSelected.push({
          text: this.propertyUpdateObj.state,
          id: this.propertyUpdateObj.state
        });
        this.stateSelected = this.stateSelected.slice();
        this.valueUpdateState = this.propertyUpdateObj.state;
      }

      if(this.propertyUpdateObj.county) {
        this.countySelected.push({
          text: this.propertyUpdateObj.county,
          id: this.propertyUpdateObj.county
        });
        this.countySelected = this.countySelected.slice();
        this.valueUpdateCounty = this.propertyUpdateObj.county;
      }

      if(this.propertyUpdateObj.msa) {
        this.msaSelected.push({
          text: this.propertyUpdateObj.msa,
          id: this.propertyUpdateObj.msa
        });
        this.msaSelected = this.msaSelected.slice();
        this.valueUpdateMsa = this.propertyUpdateObj.msa;
      }

      if(this.propertyUpdateObj.market) {
        this.marketSelected.push({
          text: this.propertyUpdateObj.market,
          id: this.propertyUpdateObj.market
        });
        this.marketSelected = this.marketSelected.slice();
        this.valueUpdateMarket = this.propertyUpdateObj.market;
      }

      if(this.propertyUpdateObj.submarket) {
        this.submarketSelected.push({
          text: this.propertyUpdateObj.submarket,
          id: this.propertyUpdateObj.submarket
        });
        this.submarketSelected = this.submarketSelected.slice();
        this.valueUpdateSubmarket = this.propertyUpdateObj.submarket;
      }

      if(this.propertyUpdateObj.primaryUse) {
        this.primaryUseSelected.push({
          text: this.propertyUpdateObj.primaryUse,
          id: this.propertyUpdateObj.primaryUse
        });
        this.primaryUseSelected = this.primaryUseSelected.slice();
        this.valueUpdatePrimaryUse = this.propertyUpdateObj.primaryUse;
      }


      if(this.propertyUpdateObj.propertyStatus) {
        this.propertyStatusSelected.push({
          text: this.propertyUpdateObj.propertyStatus,
          id: this.propertyUpdateObj.propertyStatus
        });
        this.propertyStatusSelected = this.propertyStatusSelected.slice();
        this.valueUpdatePropertyStatus = this.propertyUpdateObj.propertyStatus;
      }

      if(this.propertyUpdateObj.buildingClass) {
        this.buildingClassSelected.push({
          text: this.propertyUpdateObj.buildingClass,
          id: this.propertyUpdateObj.buildingClass
        });
        this.buildingClassSelected = this.buildingClassSelected.slice();
        this.valueUpdateBuildingClass = this.propertyUpdateObj.buildingClass;
      }

      if(this.propertyUpdateObj.rentType) {
        this.rentTypeSelected.push({
          text: this.propertyUpdateObj.rentType,
          id: this.propertyUpdateObj.rentType
        });
        this.rentTypeSelected = this.rentTypeSelected.slice();
        this.valueUpdateRentType = this.propertyUpdateObj.rentType;
      }

      if(this.propertyUpdateObj.construction) {
        this.constructionSelected.push({
          text: this.propertyUpdateObj.construction,
          id: this.propertyUpdateObj.construction
        });
        this.constructionSelected = this.constructionSelected.slice();
        this.valueUpdateConstruction = this.propertyUpdateObj.construction;
      }

      if(this.propertyUpdateObj.roofType) {
        this.roofTypeSelected.push({
          text: this.propertyUpdateObj.roofType,
          id: this.propertyUpdateObj.roofType
        });
        this.roofTypeSelected = this.roofTypeSelected.slice();
        this.valueUpdateRoofType = this.propertyUpdateObj.roofType;
      }

      if(this.propertyUpdateObj.sidingType) {
        this.sidingTypeSelected.push({
          text: this.propertyUpdateObj.sidingType,
          id: this.propertyUpdateObj.sidingType
        });
        this.sidingTypeSelected = this.sidingTypeSelected.slice();
        this.valueUpdateSidingType = this.propertyUpdateObj.sidingType;
      }

      if(this.propertyUpdateObj.foundationType) {
        this.foundationTypeSelected.push({
          text: this.propertyUpdateObj.foundationType,
          id: this.propertyUpdateObj.foundationType
        });
        this.foundationTypeSelected = this.foundationTypeSelected.slice();
        this.valueUpdateFoundationType = this.propertyUpdateObj.foundationType;
      }

      if(this.propertyUpdateObj.unitAmenities) {
        this.propertyUpdateObj.unitAmenities.forEach((data) => {
          this.unitAmenitiesSelected.push({text: data, id: data});
          this.unitAmenitiesSelected = this.unitAmenitiesSelected.slice();
          this.valueUpdateUnitAmenities.push(data);
          this.valueUpdateUnitAmenities = this.valueUpdateUnitAmenities.slice();
        });
      }

      if(this.propertyUpdateObj.siteAmenities) {
        this.propertyUpdateObj.siteAmenities.forEach((data) => {
          this.siteAmenitiesSelected.push({text: data, id: data});
          this.siteAmenitiesSelected = this.siteAmenitiesSelected.slice();
          this.valueUpdateSiteAmenities.push(data);
          this.valueUpdateSiteAmenities = this.valueUpdateSiteAmenities.slice();
        });
      }

      if(this.propertyUpdateObj.parkingType) {
        this.parkingTypeSelected.push({
          text: this.propertyUpdateObj.parkingType,
          id: this.propertyUpdateObj.parkingType
        });
        this.parkingTypeSelected = this.parkingTypeSelected.slice();
        this.valueUpdateParkingType = this.propertyUpdateObj.parkingType;
      }




    });
  }


   getFiles(){
    var files = [];
    for(var i = 0; i < $("input[name=filepond]").length; i++){
      files.push((JSON.parse($("input[name=filepond]")[i].getAttribute("value"))).data);
    }
    return files;

   //  $("input[name=filepond]").each((data,element)=>{
   //    files.push((element));
   //    if($("input[name=filepond]").length == files.length){
   //      return files;
   //    }
   //  });
   // return files;
  }


  updateProperty(){
    this.file = this.getFiles();
    //console.log("f", this.file);
    if(this.propertyUpdateObj.propertyName.length <= 0){
      this.toastr.error('Property name required.', 'Error!');
    }
    else{
      this.propertyUpdateObj.recordType = this.valueUpdateRecordType;
      this.propertyUpdateObj.state = this.valueUpdateState;
      this.propertyUpdateObj.county = this.valueUpdateCounty;
      this.propertyUpdateObj.msa = this.valueUpdateMsa;
      this.propertyUpdateObj.market = this.valueUpdateMarket;
      this.propertyUpdateObj.submarket = this.valueUpdateSubmarket;
      this.propertyUpdateObj.primaryUse = this.valueUpdatePrimaryUse;
      this.propertyUpdateObj.propertyStatus = this.valueUpdatePropertyStatus;
      this.propertyUpdateObj.buildingClass = this.valueUpdateBuildingClass;
      this.propertyUpdateObj.rentType = this.valueUpdateRentType;
      this.propertyUpdateObj.construction = this.valueUpdateConstruction;
      this.propertyUpdateObj.roofType = this.valueUpdateRoofType;
      this.propertyUpdateObj.sidingType = this.valueUpdateSidingType;
      this.propertyUpdateObj.foundationType = this.valueUpdateFoundationType;
      this.propertyUpdateObj.unitAmenities = this.valueUpdateUnitAmenities;
      this.propertyUpdateObj.siteAmenities = this.valueUpdateSiteAmenities;
      this.propertyUpdateObj.parkingType = this.valueUpdateParkingType;


      this.propertyUpdateObj.lastSaleDate = $("#updateLastSaleDate").val()?$("#updateLastSaleDate").val():"";

      this.propertyUpdateObj.updateTime = firebase.database.ServerValue.TIMESTAMP;
      this.propertyUpdateObj.updatedBy = this.userId;

      if(this.file.length > 0){
        var files = [];
        this.file.forEach((fileToUpload)=>{
          firebase.storage().ref().child('/crm/property/'+this.makeid()+'.png').putString(fileToUpload, 'base64').then(snapshot => {
            files.push(snapshot.downloadURL);
            if(files.length == this.file.length){
              this.propertyUpdateObj.pictures =  (this.propertyUpdateObj.pictures)?this.propertyUpdateObj.pictures.concat(files):files;
              firebase.database().ref('/crm/property/' + this.currentUpdateKey).update(this.propertyUpdateObj).then(result => {
                $(".close").trigger("click");
                this.initNewProperty();
                this.toastr.success('Property updated!.', 'Sucess!');
                $(".filepond--action-remove-item").click();
              }).catch((error)=>{
                console.log(error);
              });
            }
          }).catch((error)=>{
            console.log(error);
          });
        });
      }else{
        if(this.file.length == 0) {
          firebase.database().ref('/crm/property/' + this.currentUpdateKey).update(this.propertyUpdateObj).then(result => {
            $(".close").trigger("click");
            this.initNewProperty();
            this.toastr.success('Property updated!.', 'Sucess!');
            $(".filepond--action-remove-item").click();
            //setTimeout(()=>{location.reload();},2000);
          });
        }
      }
    }
  }

  //Helper function - generates unique random id for images being uploaded to firebase storage
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  //Delete Company main function called when modal conformed.
  deleteProperty(){
    this.propertyRef.child(this.currentDeleteKey).remove().then(()=>{
      this.toastr.success('Property deleted!.', 'Sucess!');
    }).catch(()=>{
      this.toastr.error('Error deleting property!.', 'Error!');
    });
  }

  //Initilize and Reinitilize Add property object
  initNewProperty(){


    this.propertyAddObj = {
      'recordType': '',
      'propertyName': '',
      'streetAddress': '',
      'city': '',
      'state': '',
      'zip': '',
      'county': '',
      'msa': '',
      'market': '',
      'submarket': '',
      'primaryUse': '',
      'propertyStatus': '',
      'buildingClass': '',
      'rentType': '',
      'lastSaleDate': '',
      "lastSalePrice": "",
      "lastSaleCap": "",
      "lastSaleType": "",
      "propertyManagement": "",
      "onSitePhone": "",
      "onSiteContact": "",
      "group": "",
      "ownershipEntity": "",
      "ownershipEntityAddress": "",
      "units": "",
      "squareFootage": "",
      "parcelNumber": "",
      "landAcres": "",
      "landSf": "",
      "far": "",
      "yearBuilt": "",
      "yearRenovated": "",
      "zoning": "",
      "construction": "",
      "roofType": "",
      "sidingType": "",
      "foundationType": "",
      "numberStories": "",
      "numberBuildings": "",
      "website": "",
      "unitAmenities": "",
      "siteAmenities": "",
      "masterMetered": "",
      "individuallyMetered": "",
      "parkingSpaces": "",
      "parkingRatio": "",
      "parkingType": "",
      "garages": "",
      "carports": "",
      "pictures": [],
      "forSale": false,
      "primaryContact": "",
      "primaryContactPhone": "",
      "primaryContactEmail": "",
      "primaryContactMobile": "",
      "primaryContactLastActivityDate": "",
      "createdBy": "",
      "createTime": "",
      "updatedBy": "",
      "updateTime": "",
      "lat": 0,
      "lng": 0,
    };

    this.propertyUpdateObj = {
      'recordType': '',
      'propertyName': '',
      'streetAddress': '',
      'city': '',
      'state': '',
      'zip': '',
      'county': '',
      'msa': '',
      'market': '',
      'submarket': '',
      'primaryUse': '',
      'propertyStatus': '',
      'buildingClass': '',
      'rentType': '',
      'lastSaleDate': '',
      "lastSalePrice": "",
      "lastSaleCap": "",
      "lastSaleType": "",

      "propertyManagement": "",
      "onSitePhone": "",
      "onSiteContact": "",
      "group": "",
      "ownershipEntity": "",
      "ownershipEntityAddress": "",
      "units": "",
      "squareFootage": "",
      "parcelNumber": "",
      "landAcres": "",
      "landSf": "",
      "far": "",
      "yearBuilt": "",
      "yearRenovated": "",
      "zoning": "",
      "construction": "",
      "roofType": "",
      "sidingType": "",
      "foundationType": "",
      "numberStories": "",
      "numberBuildings": "",
      "website": "",
      "unitAmenities": "",
      "siteAmenities": "",
      "masterMetered": "",
      "individuallyMetered": "",
      "parkingSpaces": "",
      "parkingRatio": "",
      "parkingType": "",
      "garages": "",
      "carports": "",
      "pictures": [],
      "forSale": false,
      "primaryContact": "",
      "primaryContactPhone": "",
      "primaryContactEmail": "",
      "primaryContactMobile": "",
      "primaryContactLastActivityDate": "",
      "createdBy": "",
      "createTime": "",
      "updatedBy": "",
      "updateTime": "",
      "lat": 0,
      "lng": 0
    }
  }

  addProperty(){
    //Compulsary field check
    if(this.propertyAddObj.propertyName.length <= 0){
      this.toastr.error('Name required.', 'Error!');
    }
    else{
      //Multi-select value extraction
      this.propertyAddObj.recordType = this.valueRecordType;
      this.propertyAddObj.state = this.valueState;
      this.propertyAddObj.county = this.valueCounty;
      this.propertyAddObj.msa = this.valueMsa;
      this.propertyAddObj.market = this.valueMarket;
      this.propertyAddObj.submarket = this.valueSubmarket;
      this.propertyAddObj.primaryUse = this.valuePrimaryUse;
      this.propertyAddObj.propertyStatus = this.valuePropertyStatus;
      this.propertyAddObj.buildingClass = this.valueBuildingClass;
      this.propertyAddObj.rentType = this.valueRentType;
      this.propertyAddObj.construction = this.valueConstruction;
      this.propertyAddObj.roofType = this.valueRoofType;
      this.propertyAddObj.sidingType = this.valueSidingType;
      this.propertyAddObj.foundationType = this.valueFoundationType;
      this.propertyAddObj.unitAmenities = this.valueUnitAmenities;
      this.propertyAddObj.siteAmenities = this.valueSiteAmenities;
      this.propertyAddObj.parkingType = this.valueParkingType;
      this.propertyAddObj.primaryContact = this.valuePrimaryContact;

      this.propertyAddObj.lastSaleDate = $("#addlastsaledate").val()?$("#addlastsaledate").val():"";

      //Record meta data
      this.propertyAddObj.createTime = firebase.database.ServerValue.TIMESTAMP;
      this.propertyAddObj.createdBy = this.userId;

      firebase.database().ref('/crm/property/').push(this.propertyAddObj).then(result=>{
        $(".close").trigger("click");
        this.initNewProperty();
        this.toastr.success('New property added.', 'Sucess!');
      });
    }
  }

  public refreshValueRecordType(value:any):void {
    this.valueRecordType = value.id;
  }
  public refreshValueUpdateRecordType(value:any):void {
    this.valueUpdateRecordType = value.id;
  }

  public refreshValueState(value:any):void {
    this.valueState = value.id;
    if(value.id == "Washington"){
      this.market = this.market1;
      this.submarket = this.submarket1;
      this.marketSelected = [];
      this.submarketSelected = [];
    }
    else{
      this.market = this.market2;
      this.submarket = this.submarket2;
      this.marketSelected = [];
      this.submarketSelected = [];
    }
  }
  public refreshValueUpdateState(value:any):void {
    this.valueUpdateState = value.id;
    if(value.id == "Washington"){
      this.market = this.market1;
      this.submarket = this.submarket1;
      this.marketSelected = [];
      this.submarketSelected = [];
    }
    else{
      this.market = this.market2;
      this.submarket = this.submarket2;
      this.marketSelected = [];
      this.submarketSelected = [];
    }
  }

  public refreshValueCounty(value:any):void {
    this.valueCounty = value.id;
  }
  public refreshValueUpdateCounty(value:any):void {
    this.valueUpdateCounty = value.id;
  }

  public refreshValueMsa(value:any):void {
    this.valueMsa = value.id;
  }
  public refreshValueUpdateMsa(value:any):void {
    this.valueUpdateMsa = value.id;
  }

  public refreshValueMarket(value:any):void {
    this.valueMarket = value.id;
  }
  public refreshValueUpdateMarket(value:any):void {
    this.valueUpdateMarket = value.id;
  }

  public refreshValueSubmarket(value:any):void {
    this.valueSubmarket = value.id;
  }
  public refreshValueUpdateSubmarket(value:any):void {
    this.valueUpdateSubmarket = value.id;
  }

  public refreshValuePrimaryUse(value:any):void {
    this.valuePrimaryUse = value.id;
  }
  public refreshValueUpdatePrimaryUse(value:any):void {
    this.valueUpdatePrimaryUse = value.id;
  }

  public refreshValuePropertyStatus(value:any):void {
    this.valuePropertyStatus = value.id;
  }
  public refreshValueUpdatePropertyStatus(value:any):void {
    this.valueUpdatePropertyStatus = value.id;
  }

  public refreshValueBuildingClass(value:any):void {
    this.valueBuildingClass = value.id;
  }
  public refreshValueUpdateBuildingClass(value:any):void {
    this.valueUpdateBuildingClass = value.id;
  }

  public refreshValueRentType(value:any):void {
    this.valueRentType = value.id;
  }
  public refreshValueUpdateRentType(value:any):void {
    this.valueUpdateRentType = value.id;
  }

  public refreshValueConstruction(value:any):void {
    this.valueConstruction = value.id;
  }
  public refreshValueUpdateConstruction(value:any):void {
    this.valueUpdateConstruction = value.id;
  }

  public refreshValueRoofType(value:any):void {
    this.valueRoofType = value.id;
  }
  public refreshValueUpdateRoofType(value:any):void {
    this.valueUpdateRoofType = value.id;
  }

  public refreshValueSidingType(value:any):void {
    this.valueSidingType = value.id;
  }
  public refreshValueUpdateSidingType(value:any):void {
    this.valueUpdateSidingType = value.id;
  }

  public refreshValueFoundationType(value:any):void {
    this.valueFoundationType = value.id;
  }
  public refreshValueUpdateFoundationType(value:any):void {
    this.valueUpdateFoundationType = value.id;
  }

  public refreshValueUnitAmenities(value:any):void {
    this.valueUnitAmenities = [];
    value.forEach((element)=> {
      this.valueUnitAmenities.push(element.id);
    });
  }
  public refreshValueUpdateUnitAmenities(value:any):void {
    this.valueUpdateUnitAmenities = [];
    value.forEach((element)=> {
      this.valueUpdateUnitAmenities.push(element.id);
    });
  }

  public refreshValueSiteAmenities(value:any):void {
    this.valueSiteAmenities = [];
    value.forEach((element)=> {
      this.valueSiteAmenities.push(element.id);
    });
  }
  public refreshValueUpdateSiteAmenities(value:any):void {
    this.valueUpdateSiteAmenities = [];
    value.forEach((element)=> {
      this.valueUpdateSiteAmenities.push(element.id);
    });
  }

  public refreshValueParkingType(value:any):void {
    this.valueParkingType = value.id;
  }
  public refreshValueUpdateParkingType(value:any):void {
    this.valueUpdateParkingType = value.id;
  }

  public refreshValuePrimaryContact(value:any):void {
    this.valuePrimaryContact = value.id;
  }
  public refreshValueUpdatePrimaryContact(value:any):void {
    this.valueUpdatePrimaryContact = value.id;
  }


  markerMoved(e) {
    this.propertyUpdateObj.lat =  e.coords.lat;
    this.propertyUpdateObj.lng =  e.coords.lng;
  }


  deleteIndex: number = 0;
  recordDeleteIndex(index){
    this.deleteIndex = index;
  }
  deleteImage(){

    this.propertyUpdateObj.pictures.splice(this.deleteIndex, 1);
    $(".prev-slide").click();
  }

}
