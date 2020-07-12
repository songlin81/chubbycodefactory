import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardConfigComponent } from './dashboard-config/dashboard-config.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { Dashboard404Component } from './dashboard404/dashboard404.component';


@NgModule({
  declarations: [DashboardConfigComponent, DashboardDetailComponent, Dashboard404Component],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
