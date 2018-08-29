import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';
import { ChatListComponent } from './chat-list.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const chatRoutes: Routes = [
  { path:'users', component: ChatListComponent, outlet:'chat', canActivate : [AuthGuardService]},
  { path:'users/:username', component: ChatComponent, outlet:'chat', canActivate : [AuthGuardService]},
];

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [RouterModule]
})
export class ChatListRoutingModule { }
