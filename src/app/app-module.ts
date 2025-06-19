import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UserLogin } from './feature/user/user-login/user-login';
import { MovieList } from './feature/movie/movie-list/movie-list';
import { NotFound } from './core/not-found/not-found';
import { Menu } from './core/menu/menu';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ActorList } from './feature/actor/actor-list/actor-list';

@NgModule({
  declarations: [
    App,
    UserLogin,
    MovieList,
    NotFound,
    Menu,
    ActorList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
