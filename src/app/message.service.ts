import { Injectable } from '@angular/core';
import {IMessage} from './all-message/model/message';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {username: 'Clark Kent', content: 'Hello, Im a Superman'},
    {username: 'Batman', content: 'Im rich'},
    {username: 'Lex Luthor', content: 'I hate you Superman'},
    {username: 'Thor', content: 'Who are you? Im Thor'},
    {username: 'Iron man', content: 'Come back home Thor'},
  ];

  addMessage(message: IMessage) {
    this.messageList.push(message);
  }

  scrollAllMessage() {
    $(document).ready(() => {
      const scrollHeight = document.getElementById('all-message').scrollHeight;
      $('#all-message').scrollTop(scrollHeight);
      console.log(scrollHeight);
    });
  }

  constructor() {
  }
}
