import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AuthService } from './services/auth.service';

import {environment} from "../environments/environment";
import {SignupComponent} from "./signup/signup.component";
import {SignupModule} from "./signup/signup.module";
import {ForgotPasswordComponent} from "./login/forgot-password/forgot-password.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';

export class CustomOption extends ToastOptions {
  animate = 'flyRight'; // you can override any options available
  newestOnTop = true;
  showCloseButton = true;
}

import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    CustomFormsModule,
    LoginModule,
    SignupModule,
    DashboardModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: '**', redirectTo: 'login', pathMatch: 'full'}
    ]),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService,  {provide: ToastOptions, useClass: CustomOption}],
  bootstrap: [AppComponent]
})
export class AppModule { }
