import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './shared/jwt.service';
import { UserService } from './user/user.service';
import { AuthService } from './shared/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'lng-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    pageTitle = 'Laravel Angular Authentication';
    isLoggedIn: boolean = false;
    sub!:Subscription;

    constructor(private router: Router, private jwtService: JwtService, 
    private userService: UserService, private authService: AuthService) { }

    ngOnInit() {
        // Set isLoggedIn property to show/hide menu links
        this.jwtService.userAuthState.subscribe(val => {
            this.isLoggedIn = val;
        });
    }

    logout() {
        // Logout API Call 
        this.sub = this.userService.logout().subscribe({
            next: result => this.authService.changeInfoMsg("You have been logged out!"),
            complete: () => {
                this.jwtService.setAuthState(false);
                this.jwtService.removeToken();
                this.router.navigate(['login']);
            }
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
