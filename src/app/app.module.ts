import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GithubProfileComponent,
    GithubReposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
