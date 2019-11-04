import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../all-message/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: IUser[];

  constructor(private userService: UserService) {
    this.userList = userService.userList;
  }

  ngOnInit() {
  }

}
