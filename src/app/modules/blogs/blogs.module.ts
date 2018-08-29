import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    FormsModule,
    ClarityModule.forChild(),
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
