import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EDITListingComponent } from './editlisting/editlisting.component';

import { LoginGuardService } from './services/login-guard.service'


const appRoute : Routes = [
    { path : '', component : HomeComponent },
    { path : 'listings', component : ListingsComponent, canActivate: [LoginGuardService]},
    { path : 'listing/:id', component : ListingComponent, canActivate: [LoginGuardService] },
    { path : 'addListing', component : AddListingComponent, canActivate: [LoginGuardService] },
    { path : 'editListing/:id', component : EDITListingComponent, canActivate: [LoginGuardService] }
];

export const routing = RouterModule.forRoot(appRoute);
