import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { ChatListRoutingModule } from './chat-list-routing.module';

import { ChatComponent } from './components/chat/chat.component';
import { ChatListComponent } from './chat-list.component';



@NgModule({
  declarations: [
    ChatListComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule.forChild(),
    ChatListRoutingModule
  ]
})
export class ChatListModule { }
