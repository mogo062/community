import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumsComponent } from './forums.component';
import { ForumComponent } from './components/forum/forum.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { ThreadComponent } from './components/thread/thread.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const forumsRoutes: Routes = [
  { path :'forums', component: ForumsComponent, canActivate : [AuthGuardService]},
  {
    path :'forums/:forum_alias', component: ForumComponent,
    children: [
      { path:'', component : ThreadsComponent },
      { path:':thread_alias', component : ThreadComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(forumsRoutes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
