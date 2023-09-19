import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Audio2Component } from './audio2/audio2.component';
import { VideoComponent } from './video/video.component';
const routes: Routes = [
  { path: 'audio' , component: Audio2Component},
  { path: 'video' , component: VideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ApproutingModule {
} 