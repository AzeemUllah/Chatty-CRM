import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isActive: any;

  constructor(private router: Router) {
    this.isActive = {
      dashboard: '',
      contacts: '',
      company: '',
      property: ''
    }
  }

  ngOnInit() {
    this.activeClassAssignment();
  }

  gotoDashboard(){
    this.router.navigate(['dashboard']);
    this.isActive.dashboard = 'active';
    this.isActive.contacts = '';
    this.isActive.company = '';
    this.isActive.property = '';
  }

  gotoContacts(){
    this.router.navigate(['contacts']);
    this.isActive.contacts = 'active';
    this.isActive.dashboard = '';
    this.isActive.company = '';
    this.isActive.property = '';
  }

  gotoCompany(){
    this.router.navigate(['company']);
    this.isActive.company = 'active';
    this.isActive.contacts = '';
    this.isActive.dashboard = '';
    this.isActive.property = '';
  }

  gotoProperty(){
    this.router.navigate(['property']);
    this.isActive.property = 'active';
    this.isActive.company = '';
    this.isActive.contacts = '';
    this.isActive.dashboard = '';
  }

  activeClassAssignment(){
    let currentUrl = this.router.url.replace('/','');
    if(currentUrl == 'dashboard'){
      this.isActive.dashboard = 'active';
    }
    else if(currentUrl == 'contacts'){
      this.isActive.contacts = 'active';
    }
    else if(currentUrl == 'company'){
      this.isActive.company = 'active';
    }
    else if(currentUrl == 'property'){
      this.isActive.property = 'active';
    }
  }

}
