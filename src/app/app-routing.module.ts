import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ForumsComponent } from './components/forums/forums.component';

const routes: Routes = [
  { path :'blogs', component: BlogsComponent},
  { path :'forums', component: ForumsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
