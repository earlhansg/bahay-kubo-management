import { Component, OnInit } from '@angular/core';

import { UserProfile } from '@app/dashboard/shared/models';
import { user } from '@app/dashboard/shared/components/user-profile/user-profile.data';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: UserProfile = user;

  constructor() { }

  ngOnInit() {}

}
