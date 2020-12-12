import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { MainService } from './core/main.service';
import { HomeComponent } from './main/home/home.component';
import { MainRoutingModule } from './main/main-routing.module';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {
    path:"", 
    component:MainComponent, 
    resolve:{"main":MainService}, 
    children:
    [
      {path:"", redirectTo:"home", pathMatch:'full'},
      {path:"home", component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
