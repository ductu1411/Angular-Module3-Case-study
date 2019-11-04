import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {IUser} from '../all-message/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  newUser: IUser;
  userRegisterForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    this.newUser = {
      username: this.userRegisterForm.controls.username.value,
      password: this.userRegisterForm.controls.password.value,
      nickname: this.userRegisterForm.controls.nickname.value,
      avatar: this.userRegisterForm.controls.avatar.value,
      status: 'offline',
    };
    this.userService.addtoUserList(this.newUser);
    console.log(this.userService.userList);
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}
