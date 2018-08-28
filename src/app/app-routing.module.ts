import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ForumsModule } from './modules/forums/forums.module'; /* moved to app.module.ts */

import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';

import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'users', component: ChatListComponent, outlet:'chat'},
  { path:'users/:username', component: ChatComponent, outlet:'chat'},
  { path:'', redirectTo: '/forums', pathMatch: 'full'},
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    // ForumsModule,    /* moved to app.module.ts */
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
