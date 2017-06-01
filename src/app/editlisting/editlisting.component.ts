import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { FirebaseService } from '../services/firebase.service';

import { Listing } from '../listing';

@Component({
  selector: 'app-editlisting',
  templateUrl: './editlisting.component.html',
  styleUrls: ['./editlisting.component.css']
})
export class EDITListingComponent implements OnInit {

  constructor(private firebaseservice : FirebaseService, private router:Router, private _route: ActivatedRoute) { }

  title:string;
  city:string;
  owner:string;
  bedrooms:number;
  type:string;
  price:number;
  image:string;
  $key:string;
  listing : Listing;


  submit(){
    this.listing={
      title   : this.title,
      city    : this.city,
      owner   : this.owner,
      type    : this.type,
      price   : this.price,
      bedrooms: this.bedrooms
    }
  
    this.firebaseservice.updateListing(this.$key,this.listing);
    this.router.navigate(['/listing/'+this.$key]);
  }

  ngOnInit() {
    this._route.params
      .map(params=>params['id'])
      .subscribe((id)=>{
        this.firebaseservice.getListingDetails(id)
            .subscribe((res:any)=>{
              this.title = res.title;
              this.city = res.city;
              this.owner = res.owner;
              this.bedrooms = res.bedrooms;
              this.type = res.type;
              this.price = res.price;
              this.$key = res.$key;
            })
      })
  }


}
