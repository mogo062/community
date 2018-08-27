import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsModule } from './modules/forums/forums.module';

import { LoginComponent } from './components/login/login.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path :'blogs', component: BlogsComponent},
  { path:'', redirectTo: '/forums', pathMatch: 'full'},
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    ForumsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
