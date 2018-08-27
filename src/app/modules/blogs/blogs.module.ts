import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';

import { BlogsRoutingModule } from './blogs-routing.module';

import { BlogsComponent } from './blogs.component';


@NgModule({
  declarations:[
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forChild(),
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
