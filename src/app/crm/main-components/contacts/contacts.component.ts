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

  constructor() {
  }

  ngOnInit() {
  }

}
