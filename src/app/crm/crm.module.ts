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
import { ContactDetailsComponent } from './main-components/contacts/contact-details/contact-details.component';
import { ContactsListComponent } from './main-components/contacts/contacts-list/contacts-list.component';
import { CompanyComponent } from './main-components/company/company.component';
import { CompanyDetailsComponent } from './main-components/company/company-details/company-details.component';
import { CompanyListComponent } from './main-components/company/company-list/company-list.component';
import { PropertyComponent } from './main-components/property/property.component';
import { PropertyListComponent } from './main-components/property/property-list/property-list.component';
import { PropertyDetailsComponent } from './main-components/property/property-details/property-details.component';

import { AgmCoreModule } from '@agm/core';
import { MultiSelectComponent } from './main-components/multi-select/multi-select.component';
import { PropertyMultiSelectComponent } from './main-components/multi-select/property-multi-select/property-multi-select.component';

// Import the library
import { TagsInputModule } from 'ngx-tags-input/dist';
import { ListingsComponent } from './main-components/listings/listings.component';
import { ListingDetailsComponent } from './main-components/listings/listing-details/listing-details.component';
import { ListingListComponent } from './main-components/listings/listing-list/listing-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SelectModule,
    DataTablesModule,
 // Specify the library as an import
 TagsInputModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFMtYWKJswJb49g9NymmEbLlua_xSHfZQ'
    })
  ],
  declarations: [CrmComponent, CommingSoonComponent, HeaderComponent, MessageBoxComponent,
     SidebarComponent, DashboardComponent, ContactsComponent, ContactDetailsComponent, 
     ContactsListComponent, CompanyComponent, CompanyDetailsComponent, CompanyListComponent, 
     PropertyComponent, PropertyListComponent, PropertyDetailsComponent, MultiSelectComponent,
      PropertyMultiSelectComponent,
      ListingsComponent,
      ListingDetailsComponent,
      ListingListComponent]
})
export class CrmModule { }
