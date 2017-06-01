import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import * as firebase from 'firebase';
import { Listing } from '../listing';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listing : Listing;
  constructor(private _route : ActivatedRoute, private router : Router, private firebaseService : FirebaseService ) { }

  ngOnInit() {
    this._route.params
      .map(params=>params['id'])
      .subscribe((id)=>{
        this.firebaseService.getListingDetails(id)
            .subscribe(res => {
              this.listing = res;


              let storageRef = firebase.storage().ref();
              let spaceRef = storageRef.child(this.listing.path);
              storageRef.child(this.listing.path).getDownloadURL().then((url)=>{
                this.listing.path = url
              }).catch((err)=>{
                console.log(err);
              })
            })
      })
  }

  delete(){
    console.log("delete")
    this.firebaseService.removeListing(this.listing.$key);
    this.router.navigate(['/listings'])
  }

}
