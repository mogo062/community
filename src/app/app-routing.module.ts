import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ForumsModule } from './modules/forums/forums.module'; /* moved to app.module.ts */

import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'', redirectTo: '/forums', pathMatch: 'full'},
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    // ForumsModule,    /* moved to app.module.ts */
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
