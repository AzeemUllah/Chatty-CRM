import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommingSoonComponent} from "./shared-components/comming-soon/comming-soon.component";
import {HeaderComponent} from "./shared-components/header/header.component";
import {MessageBoxComponent} from "./shared-components/message-box/message-box.component";
import {SidebarComponent} from "./shared-components/sidebar/sidebar.component";
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './main-components/dashboard/dashboard.component';
import { ContactsComponent } from './main-components/contacts/contacts.component';
import {CrmComponent} from "./crm.component";
import {RouterModule} from "@angular/router";
import {SelectModule} from 'ng2-select';
import {DataTablesModule} from "angular-datatables";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SelectModule,
    DataTablesModule
  ],
  declarations: [CrmComponent, CommingSoonComponent, HeaderComponent, MessageBoxComponent, SidebarComponent, DashboardComponent, ContactsComponent]
})
export class CrmModule { }
