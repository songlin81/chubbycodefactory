import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '../../../model/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: IUser;

  constructor() {}

  ngOnInit() {}
}