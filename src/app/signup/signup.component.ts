import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

import { AuthService} from './../services/auth.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: String = '';
  password: String = '';
  conformPassword: String = '';
  username: String = '';
  regexp: any;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private _auth: AuthService) {
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
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
    else if(!(this.regexp.test(this.email))){
      this.toastr.warning('Email should be in proper format! ', 'Stop!');
    }




  }

}
