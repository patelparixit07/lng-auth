import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		AppRoutingModule,
		SharedModule
	]
})
export class LoginModule { }
