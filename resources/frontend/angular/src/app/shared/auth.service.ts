import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IAuth } from "./auth";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private infoMsg = new BehaviorSubject('');
	currentInfoMsg = this.infoMsg.asObservable();

	constructor(private http:HttpClient) { }

	loginUrl: string = environment.apiUrl+'/api/login';
	registerUrl: string = environment.apiUrl+'/api/register';

	login(user: IAuth): Observable<any> {
		return this.http.post<any>(this.loginUrl, user).pipe(
		    tap(data => console.log('All: ', JSON.stringify(data))),
		    catchError(this.handleError)
		);
	}

	register(user: IAuth): Observable<any> {
		return this.http.post<any>(this.registerUrl, user).pipe(
		    tap(data => console.log('All: ', JSON.stringify(data))),
		    catchError(this.handleError)
		);
	}

	private handleError(err: HttpErrorResponse): Observable<never> {
		return throwError(err.error);
	}

	changeInfoMsg(message: string) {
		this.infoMsg.next(message)
	}
}
