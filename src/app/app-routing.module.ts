import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
