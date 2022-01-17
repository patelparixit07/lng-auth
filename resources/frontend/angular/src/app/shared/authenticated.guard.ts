import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

    isLoggedIn: boolean = false;

    constructor(private jwtService: JwtService, private router: Router) {}

    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // Redirect to dashboard if already loggedin
        this.jwtService.userAuthState.subscribe(val => {
            this.isLoggedIn = val;
        });
        if(this.isLoggedIn){
            this.router.navigate(['/dashboard']);
            return false;
        }
        return true;
    }  
}
