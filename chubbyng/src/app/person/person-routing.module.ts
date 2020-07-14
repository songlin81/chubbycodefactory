import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { PathResolveService } from '../PathResolveService';
import { Dashboard404Component } from '../dashboard/dashboard404/dashboard404.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
