import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http:HttpClient) { }

	profileUrl: string = environment.apiUrl+'/api/user';
	logoutUrl: string = environment.apiUrl+'/api/logout';

	profile(): Observable<any> {
		return this.http.get<any>(this.profileUrl).pipe(
		    tap(data => console.log('All: ', JSON.stringify(data))),
		    catchError(this.handleError)
		);
	}

	logout(): Observable<any> {
		return this.http.get<any>(this.logoutUrl);
	}

	private handleError(err: HttpErrorResponse): Observable<never> {
		return throwError(err.error);
	}
}
