import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MessageBoxComponent} from "./message-box/message-box.component";
import { DashboardComponent } from './dashboard.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MessageBoxComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
