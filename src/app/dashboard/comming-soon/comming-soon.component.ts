import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {fadeInAnimation} from "../../animations/fadeIn.animation";

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class CommingSoonComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, public afa: AngularFireAuth,  public router: Router) { }

  signout(){
    this.afa.auth.signOut().then(()=>{
      this.router.navigate(['login']);
    });
  }

  ngOnInit() {
  }

}
