import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllMessageComponent } from './all-message/all-message.component';
import { GroupviewComponent } from './groupview/groupview.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AllMessageComponent,
    GroupviewComponent,
    LogInComponent,
    NewMessageComponent,
    SignUpComponent,
    UserComponent,
    UserListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
