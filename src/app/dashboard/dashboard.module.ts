import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MessageBoxComponent} from "./message-box/message-box.component";
import { DashboardComponent } from './dashboard.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MessageBoxComponent,
    DashboardComponent,
    CommingSoonComponent
  ]
})
export class DashboardModule { }
