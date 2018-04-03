import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastsManager} from "ng2-toastr";
import { AngularFireDatabase } from 'angularfire2/database';
import * as $ from 'jquery';
import * as firebase from 'firebase';
import { fadeInAnimation } from '../animations/fadeIn.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  state: number = 0;
  private sub: any;
  regexp: any;

  routeState: any = "";

  constructor(private _activatedRoute: ActivatedRoute, public toastr: ToastsManager, vcr: ViewContainerRef, public af: AngularFireDatabase,  public router: Router ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.routeState = this.router.getNavigatedData();
    if(this.routeState) {
      if(this.routeState[0]) {
        if (this.routeState[0]['state'] != '') {
          if (this.routeState[0]['state'] == "signup-email-sucessful") {
            this.toastr.success('An Email was sent to your email address to verify.', 'Signup Sucessful!');
          }
          else if (this.routeState[0]['state'] == "forgot-password-email-sucessful") {
            this.toastr.success('Reset Email sent! ', 'Password Reset Sucessful!');
          }
          else if (this.routeState[0]['state'] == "verify-email-sucessful") {
            this.toastr.success('Email Verified sucessfully. Please Login! ', 'Email Verification Sucessful!');
          }
          else if (this.routeState[0]['state'] == "password-change-sucessful") {
            this.toastr.success('Your password has been reseted sucessfully. Please Login! ', 'Password Reset Sucessful!');
          }
          else if (this.routeState[0]['state'] == "bad-account-management-link") {
            this.toastr.warning('Invalid or bad account management link! ', 'Error!');
          }
        }
      }
    }

    $('.form-control').focus( function(e) {
      $(this).parent().addClass('focused');
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if(!(user.emailVerified == false)){
          this.router.navigate(['dashboard']);
        }
      }
    });


  }


  gotoSignup(){
    this.router.navigate(['signup']);
  }

  gotoForgotPassword(){
    this.router.navigate(['forgot-password']);
  }

  submit(){
    this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(this.email.length == 0){
      this.toastr.warning('Email can\'t be empty! ', 'Stop!');
    }
    else if(!(this.regexp.test(this.email))){
      this.toastr.warning('Email should be in proper format! ', 'Stop!');
    }
    else if(this.password.length == 0){
      this.toastr.warning('Password can\'t be empty! ', 'Stop!');
    }
    else {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          if (data.emailVerified == false) {
            this.toastr.warning('Check your email for conformation link!', 'Verify your account!');
          }
          else {
            this.router.navigate(['dashboard']);
          }
        })
        .catch(error => {
          if (error.code == "auth/user-not-found") {
            this.toastr.warning('No account found for this email addess!', 'Error!');
          }
          else if (error.code == "auth/wrong-password") {
            this.toastr.warning('Either your email or password is incorrect.', 'Error!');
          }
          else {
            console.log(error);
          }
        });
    }
  }


}
