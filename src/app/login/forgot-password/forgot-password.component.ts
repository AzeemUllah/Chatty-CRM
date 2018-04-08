import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireDatabase} from "angularfire2/database";
import {ToastsManager} from "ng2-toastr";
import { fadeInAnimation } from './../../animations/fadeIn.animation';
import * as $ from 'jquery';
import * as firebase from "firebase";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {

  email: string = '';
  regexp: any;

  constructor( public toastr: ToastsManager, vcr: ViewContainerRef, public af: AngularFireDatabase,  public router: Router) { this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
    $('.form-control').focus( function(e) {
      $(this).parent().addClass('focused');
    });
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }

  submit(){
    this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(this.email.length == 0){
      this.toastr.warning('Email can\'t be empty! ', 'Stop!');
    }
    else if(!(this.regexp.test(this.email))){
      this.toastr.warning('Email should be in proper format! ', 'Stop!');
    }
    else{
      firebase.auth().sendPasswordResetEmail(this.email).then(()=> {
        this.router.navigateByData({
          url: ["login"],
          data: [{"state": "forgot-password-email-sucessful"}]
        });
      }).catch(error => {
        this.toastr.warning('You have exceded reset emails limit. Please come back later or contact admin. ', 'Stop!');
      });
    }
  }

}
