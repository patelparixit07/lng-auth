import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		RegisterComponent
	],
	imports: [
		SharedModule
	]
})
export class RegisterModule { }
