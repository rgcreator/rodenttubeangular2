import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApproutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { Audio2Component } from './audio2/audio2.component';
import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PlatformModule } from '@angular/cdk/platform';
import { fa, faker } from '@faker-js/faker';
@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    Audio2Component
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    IonicModule.forRoot(),
    ScrollingModule,
    PlatformModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
