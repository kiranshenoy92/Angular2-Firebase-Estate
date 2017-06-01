import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

import { Listing } from '../listing';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  constructor(private firebaseservice : FirebaseService, private router: Router) { }

  title:string;
  city:string;
  owner:string;
  bedrooms:number;
  type:string;
  price:number;
  image:string;
  listing : Listing;

  ngOnInit() {
    
  }

  submit(){
    this.listing = {
      image   : this.image,
      title   : this.title,
      city    : this.city,
      owner   : this.owner,
      type    : this.type,
      price   : this.price,
      bedrooms: this.bedrooms
    }
    
    this.firebaseservice.addListing(this.listing);
    this.router.navigate(['listings']);
  }

}
