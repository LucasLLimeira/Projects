import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
export const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"listar", component: ListarComponent}];
