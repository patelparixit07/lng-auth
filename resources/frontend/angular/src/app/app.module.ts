import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule,
        HttpClientModule,
        LoginModule,
        RegisterModule,
        UserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
