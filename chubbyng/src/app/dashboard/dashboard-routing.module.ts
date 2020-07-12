import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardConfigComponent } from './dashboard-config/dashboard-config.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { PathResolveService } from '../PathResolveService';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Dashboard404Component } from './dashboard404/dashboard404.component';

const routes: Routes = [
  { path : "config", component : DashboardConfigComponent },
  { path : "detail", component : DashboardDetailComponent },
  { path : "", redirectTo : "config" },
  {
    path: '**', 
    resolve: {
      path: PathResolveService
    },
    component: Dashboard404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
