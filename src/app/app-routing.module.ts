import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CaffiesComponent } from './caffies/caffies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"" , redirectTo:"login" , pathMatch:"full"},
  { path: "home", component: HomeComponent },
  { path: "addProfile", component: ProfileComponent },
  { path: "contactUs", component: ContactUsComponent },
  { path: "Resturants&cafe/:id", component: CaffiesComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {path:"about" , component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
