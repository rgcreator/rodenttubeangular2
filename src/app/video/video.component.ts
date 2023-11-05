import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{

constructor() { }

ngOnInit(): void {
let   playvideobutton = document.getElementById("playvideo") as HTMLButtonElement;
let pausevideobutton = document.getElementById("pausevideo") as HTMLButtonElement;
let iframe = document.getElementById("iframe") as HTMLIFrameElement;
let audioenvideo = document.getElementById("video") as HTMLVideoElement;
let videolist = new Array;
var i = 0;
let next = document.getElementById('volgendevideo') as HTMLButtonElement;
let back = document.getElementById('vorigevideo') as HTMLButtonElement;
fetch('assets/videolist.json')
  .then(res => res.json())
  .then((data: any) => {
    videolist = data;
  })
playvideobutton.onclick = () => {
  audioenvideo.src = videolist[i].toString();
  audioenvideo.load();
  audioenvideo.play();
}
pausevideobutton.onclick  = function(){
  if (audioenvideo.paused == false){
    audioenvideo.pause();
  } else if (audioenvideo.paused == true){
    audioenvideo.play();
  }
}

next.onclick = function(){
  if (i < videolist.length - 1){
    i++;
    audioenvideo.src = videolist[i].toString();
    audioenvideo.load();
    audioenvideo.play(); 
  } else {
    i = 0;
  }
}
back.onclick = () => {
  if (i > 0){
    i--;
    audioenvideo.src = videolist[i].toString();
    audioenvideo.load();
    audioenvideo.play(); 
  } else {
    i = videolist.length - 1;
  }
}
}
}
