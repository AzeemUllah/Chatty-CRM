import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {ToastsManager} from "ng2-toastr";
import {fadeInAnimation} from "../../animations/fadeIn.animation";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class VerifyEmailComponent implements OnInit {

  message: string = "Verifying your email. Please wait...";
  loginButton: boolean = false;


  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private route:ActivatedRoute, public router: Router, public location: Location, private firebaseAuth: AngularFireAuth) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      firebase.auth().signInWithEmailLink(params['email'].replace('=',''), "http://localhost:4200/"+this.location.path())
        .then(result => {
          firebase.auth().signOut().then(() => {
            this.router.navigateByData({
              url: ["login"],
              data: [{"state": "verify-email-sucessful"}]
            });
          }).catch(error => {
            this.toastr.warning("An unexpected error occured. Contact Admin!", 'Stop!');
          });
        })
        .catch(error => {
          this.message = error;
          this.loginButton = true;
          this.toastr.error(error, 'Stop!');
        });
    });
  }

}
