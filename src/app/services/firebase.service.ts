import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Listing } from '../listing';
import { Http, Headers , Response} from '@angular/http';
import * as firebase from 'firebase';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  listings : FirebaseListObservable<any[]>;
  folder:any;
  constructor(private af : AngularFire, private http: Http) { 
    this.folder = 'listingImages';
  }

  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings
  }
  
  getListingDetails(id){
    return this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
  }
  
  addListing(listing : Listing){
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot)=>{
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }

  updateListing(id, listing){
    return this.listings.update(id, listing);
  }

  removeListing(id){
    return this.listings.remove(id);
  }
}
