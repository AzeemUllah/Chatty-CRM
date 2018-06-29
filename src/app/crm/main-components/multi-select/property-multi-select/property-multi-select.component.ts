import { Component, OnInit,  ViewChild, ViewContainerRef } from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-property-multi-select',
  templateUrl: './property-multi-select.component.html',
  styleUrls: ['./property-multi-select.component.css']
})
export class PropertyMultiSelectComponent implements OnInit {

  //Support Variables
  userId: string = '';

  // Firebase Referance
  multiSelectRef: any;

  removeLastOnBackspace: boolean = true;
  canDeleteTags: boolean = true;

  submarketWashginton: Array<any> = [];
  submarketOregon: Array<any> = [];
  siteAmenities: Array<any> = [];
  unitAmenities: Array<any> = [];

  submarketWashgintonTemp: Array<string> = [];
  submarketOregonTemp: Array<string> = [];
  siteAmenitiesTemp: Array<string> = [];
  unitAmenitiesTemp: Array<string> = [];

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public af: AngularFireDatabase,  public router: Router ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.userId = user.uid;
      } else {
        // No user is signed in.
      }
    });

    this.multiSelectRef = firebase.database().ref("/crm/multiSelect/property/");
    this.multiSelectRef.child("submarket/washginton/").once('value', (snapshot) => {
      this.submarketWashginton = [];
      for (var key in snapshot.val()) {
        this.submarketWashginton.push({"displayValue":snapshot.val()[key]});
      }
    });

    this.multiSelectRef.child("submarket/oregon/").once('value', (snapshot) => {
      this.submarketOregon = [];
      for (var key in snapshot.val()) {
        this.submarketOregon.push({"displayValue":snapshot.val()[key]});
      }
    });

    this.multiSelectRef.child("siteAmenities/").once('value', (snapshot) => {
      this.siteAmenities = [];
      for (var key in snapshot.val()) {
        this.siteAmenities.push({"displayValue":snapshot.val()[key]});
      }
    });

    this.multiSelectRef.child("unitAmenities/").once('value', (snapshot) => {
      this.unitAmenities = [];
      for (var key in snapshot.val()) {
        this.unitAmenities.push({"displayValue":snapshot.val()[key]});
      }
    });

  }

  onSubmarketWashgintonChanged(e){
    this.submarketWashgintonTemp = [];
    this.submarketWashginton.forEach((item)=>{
      this.submarketWashgintonTemp.push(item.displayValue);
      console.log( this.submarketWashginton.length == this.submarketWashgintonTemp.length);
      if(this.submarketWashginton.length == this.submarketWashgintonTemp.length){
        console.log(this.submarketWashgintonTemp);
        this.multiSelectRef.child("submarket/washginton/")
        .set(this.submarketWashgintonTemp).then(result => {});
      }
    });

    if(e["change"] == "remove" && this.submarketWashginton.length == 0){
      this.multiSelectRef.child("submarket/washginton/").remove();
    }
  }

  onSubmarketOregonChanged(e){
    this.submarketOregonTemp = [];
    this.submarketOregon.forEach((item)=>{
      this.submarketOregonTemp.push(item.displayValue);
      if(this.submarketOregon.length == this.submarketOregonTemp.length){
        this.multiSelectRef.child("submarket/oregon/")
        .set(this.submarketOregonTemp).then(result => {});
      }
    });
    if(e["change"] == "remove" && this.submarketOregon.length == 0){
      this.multiSelectRef.child("submarket/oregon/").remove();
    }
  }

  onSiteAmenitiesChanged(e){
    this.siteAmenitiesTemp = [];
    this.siteAmenities.forEach((item)=>{
      this.siteAmenitiesTemp.push(item.displayValue);
      if(this.siteAmenities.length == this.siteAmenitiesTemp.length){
        this.multiSelectRef.child("siteAmenities/")
        .set(this.siteAmenitiesTemp).then(result => {});
      }
    });
    if(e["change"] == "remove" && this.siteAmenities.length == 0){
      this.multiSelectRef.child("siteAmenities/").remove();
    }
  }

  onUnitAmenitiesChanged(e){
    this.unitAmenitiesTemp = [];
    this.unitAmenities.forEach((item)=>{
      this.unitAmenitiesTemp.push(item.displayValue);
      if(this.unitAmenities.length == this.unitAmenitiesTemp.length){
        this.multiSelectRef.child("unitAmenities/")
        .set(this.unitAmenitiesTemp).then(result => {});
      }
    });
    if(e["change"] == "remove" && this.unitAmenities.length == 0){
      this.multiSelectRef.child("unitAmenities/").remove();
    }
  }
}
