import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsComponent } from './blogs.component';

const blogsRoutes: Routes = [
    { path :'blogs', component: BlogsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(blogsRoutes)
  ],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
