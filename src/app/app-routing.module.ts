import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionGuardService } from './helpers'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'priv/home' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'new-user', loadChildren: './new_user/new-user.module#NewUserModule'},
  { path: 'priv', canActivateChild: [SessionGuardService], children: [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'details', loadChildren: './details/details.module#DetailsModule' }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
