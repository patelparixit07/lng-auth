import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { JwtService } from '../shared/jwt.service';

@Component({
    selector: 'lng-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;
    errors = {
        email: '',
        password: '',
        error: ''
    };
    infoMsg:string = '';
    isLoggedIn:boolean = false;

    constructor(private fb: FormBuilder, private authService:AuthService, 
    private router: Router, private jwtService: JwtService ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['',[Validators.required, Validators.minLength(8)]]
        });
        console.log(this.loginForm);
    }

    ngOnInit(): void {
        // Get info message
        this.authService.currentInfoMsg.subscribe(message => this.infoMsg = message);
    }

    onSubmit(): void {
        // Login API Call
        this.authService.login(this.loginForm.value).subscribe({
            next: result => this.jwtService.setToken(result.token),
            error: err => this.errors = err,
            complete: () => {
                this.jwtService.setAuthState(true);
                this.loginForm.reset()
                this.router.navigate(['dashboard']);
            }
        });
    }

    ngOnDestroy() {
        this.authService.changeInfoMsg("");
    }
}
