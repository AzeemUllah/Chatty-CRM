import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  message: string = "Verifying your email. Please wait...";
  messageForgotPassword: string = "";

  loginButton: boolean = false;

  mode: string = null;
  actionCode: string = null;
  windowLocation: string = null;

  password: string = null;
  conformPassword: string = null;

  uid:string = '';


  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private route:ActivatedRoute, public router: Router, public location: Location, private firebaseAuth: AngularFireAuth) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }

  gotoForgotPassword(){
    this.router.navigate(['forgot-password']);
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid;
      }
    });

    this.route.queryParams.subscribe(params => {
      this.mode = params['mode'];
      this.actionCode = params['oobCode'];
      this.windowLocation = "https://chattycrm-beta.firebaseapp.com/"+this.location.path();

      if(params){
        if(this.mode != null && this.mode != ''){
          if(this.mode == 'verifyEmail'){
            firebase.auth().applyActionCode(this.actionCode)
              .then(result => {
                setTimeout(()=>{
                  firebase.database().ref('/users/'+this.uid).update({
                    isEmailVerified: true
                  }).then(() => {
                    firebase.auth().signOut().then(() => {
                      this.router.navigateByData({
                        url: ["login"],
                        data: [{"state": "verify-email-sucessful"}]
                      });
                    }).catch(error => {
                      this.toastr.warning("An unexpected error occured. Contact Admin!", 'Stop!');
                    });
                  });
                },1000);
              })
              .catch(error => {
                this.message = error;
                this.loginButton = true;
                this.toastr.error(error, 'Stop!');
              });
          }
        }
        else{
          this.router.navigateByData({
            url: ["login"],
            data: [{"state": "bad-account-management-link"}]
          });
        }
      }
      else{
        this.router.navigateByData({
          url: ["login"],
          data: [{"state": "bad-account-management-link"}]
        });
      }
    });



  }


  changePassword(){
   if(this.password.length == 0){
      this.toastr.warning('Password can\'t be empty! ', 'Stop!');
    }
    else if(this.conformPassword.length == 0){
      this.toastr.warning('Conform Password can\'t be empty! ', 'Stop!');
    }
    else if(this.conformPassword != this.password){
      this.toastr.warning('Password and Conform Password fields should have same values! ', 'Stop!');
    }
    else{
     firebase.auth().confirmPasswordReset(this.actionCode, this.password)
       .then(result => {
         firebase.auth().signOut().then(() => {
           this.router.navigateByData({
             url: ["login"],
             data: [{"state": "password-change-sucessful"}]
           });
         }).catch(error => {
           this.toastr.warning("An unexpected error occured. Contact Admin!", 'Stop!');
         });
       })
       .catch(error => {
         this.messageForgotPassword = error;
         this.loginButton = true;
         this.toastr.error(error, 'Stop!');
       });
    }
  }



}
