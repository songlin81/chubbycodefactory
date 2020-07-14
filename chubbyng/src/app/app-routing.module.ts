import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PersonComponent } from './person/person.component';
import { paths } from './app-paths';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathResolveService } from './PathResolveService';

const routes: Routes = [
  {path: "", redirectTo: paths.dashboard, pathMatch: 'full'},
  {path: paths.accounts, component: AccountsComponent},
  {
    path: paths.dashboard,
    loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    component: DashboardComponent
  },
  {
    path: paths.person,
    loadChildren: ()=>import('./person/person.module').then(m=>m.PersonModule),
    component: PersonComponent
  },
  {
    path: '**', 
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
