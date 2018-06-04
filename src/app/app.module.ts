import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

import { RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";

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

import "angular2-navigate-with-data";

import {AccountManagementModule} from "./account-management/account-management.module";
import {AccountManagementComponent} from "./account-management/account-management.component";
import {CrmComponent} from "./crm/crm.component";
import {ContactsComponent} from "./crm/main-components/contacts/contacts.component";
import {DashboardComponent} from "./crm/main-components/dashboard/dashboard.component";
import {CrmModule} from "./crm/crm.module";
import {SelectModule} from 'ng2-select';
import {DataTablesModule} from 'angular-datatables';
import {AngularFireStorageModule} from "angularfire2/storage";
import {ContactDetailsComponent} from "./crm/main-components/contacts/contact-details/contact-details.component";
import {ContactsListComponent} from "./crm/main-components/contacts/contacts-list/contacts-list.component";
import {CompanyDetailsComponent} from "./crm/main-components/company/company-details/company-details.component";
import {CompanyListComponent} from "./crm/main-components/company/company-list/company-list.component";
import {CompanyComponent} from "./crm/main-components/company/company.component";
import {PropertyComponent} from "./crm/main-components/property/property.component";
import {PropertyListComponent} from "./crm/main-components/property/property-list/property-list.component";
import {PropertyDetailsComponent} from "./crm/main-components/property/property-details/property-details.component";

import { AgmCoreModule } from '@agm/core';

export class CustomOption extends ToastOptions {
  animate = 'flyRight';
  newestOnTop = true;
  showCloseButton = true;
}

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    LoginModule,
    SignupModule,
    FormsModule,
    CrmModule,
    HttpClientModule,
    SelectModule,
    DataTablesModule,
    AccountManagementModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'login/:state', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'account-management', component: AccountManagementComponent },
      { path: '', component: CrmComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: "full" },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'contacts', component: ContactsComponent,  children: [
              { path: '', component: ContactsListComponent},
              { path: 'contact-details', component: ContactDetailsComponent}
            ]
          },
          { path: 'company', component: CompanyComponent,  children: [
            { path: '', component: CompanyListComponent},
            { path: 'company-details', component: CompanyDetailsComponent}
          ]
          },
          { path: 'property', component: PropertyComponent,  children: [
            { path: '', component: PropertyListComponent},
            { path: 'property-details', component: PropertyDetailsComponent}
          ]
          }
        ]
      },

      { path: '**', redirectTo: 'login', pathMatch: 'full'}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFMtYWKJswJb49g9NymmEbLlua_xSHfZQ'
    })
  ],
  providers: [AuthService,  {provide: ToastOptions, useClass: CustomOption}],
  bootstrap: [AppComponent]
})
export class AppModule {



}
