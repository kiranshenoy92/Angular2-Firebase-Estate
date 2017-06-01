import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private af : AngularFire) { }

  ngOnInit() {
  }

  login(){
    this.af.auth.login();
    this.af.auth.subscribe(res=>{
      if(res){
        localStorage.setItem('user',JSON.stringify(res.google));
      }
    })
  }
}
