import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router, CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import { user } from './user';

@Injectable()
export class LoginGuardService {
  loggedInUser :user
  constructor( private af : AngularFire,private router : Router) { }

  canActivate(next : ActivatedRouteSnapshot , state : RouterStateSnapshot){
    this.loggedInUser = JSON.parse(localStorage.getItem('user'));
    if(this.loggedInUser){
        return true;
    }
    this.router.navigate(['/'])
    return false
  }
}
