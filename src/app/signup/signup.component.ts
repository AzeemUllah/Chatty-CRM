import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import * as $ from 'jquery';
import {Router} from "@angular/router";
import {fadeInAnimation} from "../animations/fadeIn.animation";
import set = Reflect.set;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string = '';
  password: string = '';
  conformPassword: string = '';
  username: string = '';
  regexp: any;

  actionCodeSettings: any;



  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private firebaseAuth: AngularFireAuth, public router: Router) {
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
    $('.form-control').focus(function(e) {
      $(this).parent().addClass('focused');
    });
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }


  submit(){

    this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(this.username.length == 0){
      this.toastr.warning('Username can\'t be empty! ', 'Stop!');
    }
    else if(this.email.length == 0){
      this.toastr.warning('Email can\'t be empty! ', 'Stop!');
    }
    else if(this.password.length == 0){
      this.toastr.warning('Password can\'t be empty! ', 'Stop!');
    }
    else if(this.conformPassword.length == 0){
      this.toastr.warning('Conform Password can\'t be empty! ', 'Stop!');
    }
    else if(this.conformPassword != this.password){
      this.toastr.warning('Password and Conform Password fields should have same values! ', 'Stop!');
    }
    else if((!(this.regexp.test(this.email)))){
      this.toastr.warning('Email should be in proper format! ', 'Stop!');
    }else{
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(value => {
            let user: any = firebase.auth().currentUser;

            user.sendEmailVerification()
              .then(() => {
                firebase.database().ref('users/' + user.uid).set({
                  username: this.username,
                  email: user.email,
                  displayName: user.displayName,
                  isAdmin: false,
                  isEmailVerified: user.emailVerified,
                  createDate: user.metadata.creationTime,
                  providerDisplayName: user.providerData[0].displayName,
                  providerId: user.providerData[0].providerId,
                  providerUid: user.providerData[0].providerId,
                  providerPhotoUrl: user.providerData[0].photoURL,
                  providerPhoneNumber: user.providerData[0].phoneNumber,
                  providerEmail: user.providerData[0].email,
                });

                firebase.database().ref('usernames/' + user.uid).set({
                  username: this.username,
                  email: user.email,
                });

                this.router.navigateByData({
                  url: ["login"],
                  data: [{"state": "signup-email-sucessful"}]
                });
              }).catch(error => {
              this.toastr.warning(error, 'Stop!');
            });
          })
          .catch(err => {
            this.toastr.warning(err, 'Stop!');
          });


    }




  }

}
