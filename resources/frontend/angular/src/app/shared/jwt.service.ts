import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})

export class JwtService {

    private issuer = {
        login: 'http://localhost:8000/api/login',
        register: 'http://localhost:8000/api/register'
    }

    private userState = new BehaviorSubject<boolean>(this.isValidToken());
    userAuthState = this.userState.asObservable();

    constructor() { }

    // Set Auth_Token in local storage
    setToken(token:string){
        localStorage.setItem('auth_token', token);
    }

    // Get Auth_Token from local storage
    getToken(){
        return localStorage.getItem('auth_token');
    }

    // Check if Auth_Token is valid
    isValidToken(): boolean {
        const token = this.getToken();

        if(token){
            const payload = this.payload(token);
            if(payload){
                return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
            }
        } else {
            return false;
        }
        return false;
    }

    payload(token: string) {
        const jwtPayload = token.split('.')[1];
        return JSON.parse(atob(jwtPayload));
    }

    // Remove Auth_Token from local storage
    removeToken(){
        localStorage.removeItem('auth_token');
    }

    setAuthState(value: boolean) {
        this.userState.next(value);
    }
}
