import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { user } from '../services/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  loggedInUser : user;
  constructor( private af : AngularFire, private router : Router) { }

  ngOnInit() {

  }

  login(){
    this.af.auth.login();
    this.af.auth.subscribe(res=>{
      if(res){
        this.loggedInUser = res.google;
        localStorage.setItem('user',JSON.stringify(res.google));
      }
    })
  }

  logout(){
    this.router.navigate(['/'])
    this.af.auth.logout();
    localStorage.removeItem('user');

  }
}
