import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { JwtService } from '../shared/jwt.service';

@Component({
	selector: 'lng-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	errors = {
		name: '',
		email: '', 
		password: '',
		password_confirmation: ''
	};

	constructor(private fb: FormBuilder, private authService:AuthService, 
		private jwtService:JwtService, private router:Router) {
		this.registerForm = this.fb.group({
			name: ['', [Validators.required, Validators.maxLength(50)]],
			email: ['', [Validators.required, Validators.email]],
			password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
			password_confirmation: ['']
	    });
	}

	ngOnInit(): void {
	}

	onSubmit(): void {
		// Register API Call
		this.authService.register(this.registerForm.value).subscribe({
		  next: result => this.authService.changeInfoMsg("Successfully Registered!"),
		  error: err => this.errors = err,
		  complete: () => {
		      this.registerForm.reset()
		      this.router.navigate(['login']);
		  }
		});
	}
}
