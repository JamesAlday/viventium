import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { CommentComponent } from './comment/comment.component';

import { SafeHtmlPipe } from "./safeHtml.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CommentComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SafeHtmlPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
