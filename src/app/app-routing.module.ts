import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent, LoginComponent, HomeComponent,
  CategoryComponent, CategoryEditorComponent ,
UserEditorComponent , UsersComponent } from './components/index';

const routes: Routes = [
  { path: '', component : DashboardComponent},
  { path: 'dashboard', component : DashboardComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserEditorComponent },
  { path: 'category/:id', component: CategoryEditorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }