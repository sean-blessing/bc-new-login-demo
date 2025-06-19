import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound } from './core/not-found/not-found';
import { MovieList } from './feature/movie/movie-list/movie-list';
import { UserLogin } from './feature/user/user-login/user-login';
import { ActorList } from './feature/actor/actor-list/actor-list';

const routes: Routes = [
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
  { path: 'movie-list', component: MovieList },
  { path: 'actor-list', component: ActorList },
  { path: 'user-login', component: UserLogin },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
