import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { RegistrationModule } from './registration/registration.module';
import { WelcomeLoginComponent } from './welcome-login.component';



@NgModule({
  declarations: [
    AppComponent,
   WelcomeLoginComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    UserModule,
    RegistrationModule,


    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    
    
  ]
})
export class AppModule { }
