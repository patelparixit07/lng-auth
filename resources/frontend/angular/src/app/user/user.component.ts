import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAuth } from '../shared/auth';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'lng-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  
    UserProfile!: IAuth;
    sub!:Subscription;

    constructor(public userService: UserService) { }

    ngOnInit(): void {
        // Profile API Call
        this.sub = this.userService.profile().subscribe((data:any) => {
            this.UserProfile = data;
        })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
