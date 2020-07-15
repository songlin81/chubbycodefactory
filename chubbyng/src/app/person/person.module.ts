import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UsersContainerComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NgxSpinnerModule
  ]
})
export class PersonModule { }
