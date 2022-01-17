import { NgModule } from '@angular/core';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		DashboardComponent,
		UserComponent
	],
	imports: [
		SharedModule
	]
})
export class UserModule { }
