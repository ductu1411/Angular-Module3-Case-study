import { Injectable } from '@angular/core';
import {IUser} from './all-message/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static STATUS_ONLINE = 'online';
  static STATUS_OFFLINE = 'offline';
  userList: IUser[] = [
    {
      username: 'admin',
      nickname: 'Clark Kent',
      password: 'admin',
      avatar:'https://thuthuatnhanh.com/wp-content/uploads/2018/07/4k-wallpaper-nguoi-dan-ong-nong-dan-Campuchia-130x90.jpg',
      status: 'online'},
    {
      username: 'admin1',
      nickname: 'Lex Luthor',
      password: 'admin1',
      avatar:'https://thuthuatnhanh.com/wp-content/uploads/2018/07/4k-wallpaper-nguoi-dan-ong-nong-dan-Campuchia-130x90.jpg',
      status: 'online'},
    {
      username: 'admin6',
      nickname: 'Batman',
      password: 'admin6',
      avatar:'https://thuthuatnhanh.com/wp-content/uploads/2018/07/4k-wallpaper-nguoi-dan-ong-nong-dan-Campuchia-130x90.jpg',
      status: 'online'},
    {
      username: 'admin2',
      nickname: 'Wonder Woman',
      password: 'admin2',
      avatar:'https://thuthuatnhanh.com/wp-content/uploads/2018/07/4k-wallpaper-nguoi-dan-ong-nong-dan-Campuchia-130x90.jpg',
      status: 'online'},
    {
      username: 'admin3',
      nickname: 'Iron man',
      password: 'admin3',
      avatar:'https://thuthuatnhanh.com/wp-content/uploads/2018/07/4k-wallpaper-nguoi-dan-ong-nong-dan-Campuchia-130x90.jpg',
      status: 'online'},
    {
      username: 'admin4',
      nickname: 'Thor',
      password: 'admin4',
      avatar:'https://thuthuatnhanh.com/wp-content/uploads/2018/07/4k-wallpaper-nguoi-dan-ong-nong-dan-Campuchia-130x90.jpg',
      status: 'online'},
    {
      username: 'admin5',
      nickname: 'Loki',
      password: 'admin5',
      avatar:'https://thuthuatnhanh.com/wp-content/uploads/2018/07/4k-wallpaper-nguoi-dan-ong-nong-dan-Campuchia-130x90.jpg',
      status: 'online'},
  ];
  loginUser: IUser = {
    username: 'admin',
    nickname: 'Clark Kent',
    password: 'admin',
    avatar:'https://thuthuatnhanh.com/wp-content/uploads/2018/07/4k-wallpaper-nguoi-dan-ong-nong-dan-Campuchia-130x90.jpg',
    status: 'online'
  }; // Test login user

  addtoUserList(user: IUser) {
    this.userList.push(user);
  }

  login(user: IUser): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userList.length; i++) {
      if ((this.userList[i].username === user.username) && (this.userList[i].password === user.password)) {
        this.userList[i].status = UserService.STATUS_ONLINE;
        this.loginUser = this.userList[i];
        return true;
      }
    }
    return false;
  }

  constructor() {
  }
}
