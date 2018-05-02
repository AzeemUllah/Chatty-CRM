import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {

  constructor(public af: AngularFireDatabase,  public router: Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user){

      }
      else{
        this.router.navigateByData({
          url: ["login"],
          data: [{"state": "not-authenticated"}]
        });
      }
    });
  }

}
