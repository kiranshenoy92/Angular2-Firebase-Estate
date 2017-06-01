import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EDITListingComponent } from './editlisting/editlisting.component';

import { FirebaseService } from './services/firebase.service'
import { LoginGuardService } from './services/login-guard.service'

import { firebaseEnv } from './app.firebase';



const firebaseAuth = {
  provider : AuthProviders.Google,
  method : AuthMethods.Popup
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListingsComponent,
    ListingComponent,
    AddListingComponent,
    EDITListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseEnv.firebase,firebaseAuth),
    routing
  ],
  providers: [ FirebaseService, LoginGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
