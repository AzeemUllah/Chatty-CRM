import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AngularFireDatabase} from "angularfire2/database";

import { Observable } from 'rxjs/Observable';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String = '';
  password: String = '';

  isLogin: boolean = false;
  loginSucessful: boolean = false;

  items: Observable<any>;


  constructor(private _router: Router, private _auth: AuthService) {
    this._auth.test().subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit() {
      //this._router.navigateByUrl('/dashboard');
  }

  submit(){
   // this.loginSucessful = this._loginService.signin(this.email, this.password);
   // alert(this.email + " / " + this.password);
    console.log(this.items);
  }


}
