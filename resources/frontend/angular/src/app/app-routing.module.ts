import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AuthenticatedGuard } from './shared/authenticated.guard';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [	
	{path:'login', canActivate: [AuthenticatedGuard], component:LoginComponent},
	{path:'register', canActivate: [AuthenticatedGuard], component:RegisterComponent},
	{path:'dashboard', canActivate: [AuthGuard], component:DashboardComponent},
	{path:'profile', canActivate: [AuthGuard], component:UserComponent},
	{path:'', redirectTo:'login', pathMatch:'full'},
	{path:'**', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
