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
      contacts: ''
    }
  }

  ngOnInit() {
    this.activeClassAssignment();
  }

  gotoDashboard(){
    this.router.navigate(['dashboard']);
    this.isActive.dashboard = 'active';
    this.isActive.contacts = '';
  }

  gotoContacts(){
    this.router.navigate(['contacts']);
    this.isActive.contacts = 'active';
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
  }

}
