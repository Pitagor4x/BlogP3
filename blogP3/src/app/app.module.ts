import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';
import { Error404Component } from './components/error404/error404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RecortarTextoPipe } from './pipes/recortar-texto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    PostComponent,
    CategoryComponent,
    Error404Component,
    HeaderComponent,
    RecortarTextoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
