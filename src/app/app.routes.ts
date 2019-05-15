import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeLoginComponent } from './welcome-login.component';



export const appRoutes: Routes=[
    {path:"",component:WelcomeLoginComponent},
    {path:"home",component:AppComponent},
    {path:"user",component:AppComponent},
    
    
];