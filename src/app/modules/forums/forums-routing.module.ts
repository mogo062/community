import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumsComponent } from './forums.component';
import { ForumComponent } from './components/forum/forum.component';

const forumsRoutes: Routes = [
  { path :'forums', component: ForumsComponent},
  { path :'forums/:forum_alias', component: ForumComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(forumsRoutes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
