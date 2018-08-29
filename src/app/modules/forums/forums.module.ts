import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';

import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsComponent } from './forums.component';
import { ForumComponent } from './components/forum/forum.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { ThreadComponent } from './components/thread/thread.component';


@NgModule({
  declarations:[
    ForumsComponent,
    ForumComponent,
    ThreadsComponent,
    ThreadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule.forChild(),
    ForumsRoutingModule
  ]
})
export class ForumsModule { }
