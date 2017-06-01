import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'
import { Listing } from '../listing';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings : Listing[];
  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
      this.firebaseService.getListings().subscribe(
        (listing) =>{
          this.listings = listing;
        },
        (Error)=>{
          console.log("some error");
        }
      )
  }

}
