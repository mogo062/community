import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';

import { ForumsComponent } from './forums.component';
import { ForumComponent } from './components/forum/forum.component';

const forumsRoutes: Routes = [
  { path :'forums', component: ForumsComponent},
  { path :'forums/:forum_alias', component: ForumComponent}
];

@NgModule({
  declarations:[
    ForumsComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forChild(),
    RouterModule.forChild(forumsRoutes)]
})
export class ForumsModule { }
