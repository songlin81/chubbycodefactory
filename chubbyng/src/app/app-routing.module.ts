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
  {path: paths.person, component: PersonComponent},
  {path: paths.dashboard, component: DashboardComponent},
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
