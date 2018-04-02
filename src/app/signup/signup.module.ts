import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import {FormsModule} from "@angular/forms";
import { VerifyEmailComponent } from './verify-email (Depricated)/verify-email.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SignupComponent, VerifyEmailComponent]
})
export class SignupModule { }
