import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';

import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsComponent } from './forums.component';
import { ForumComponent } from './components/forum/forum.component';


@NgModule({
  declarations:[
    ForumsComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forChild(),
    ForumsRoutingModule
  ]
})
export class ForumsModule { }
