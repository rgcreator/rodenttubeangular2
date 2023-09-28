import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-audio2',
  templateUrl: './audio2.component.html',
  styleUrls: ['./audio2.component.css']
})
export class Audio2Component implements OnInit{

  constructor() { }

ngOnInit(): void {
  let author = new String();
  let title2 = new String();
  let title3 = new String();
  let songtitle2 = new String;
  let Audiolist = new Array;
  let audio = document.getElementById("audio") as HTMLAudioElement;
let titlelement = document.getElementById("title") as HTMLElement;
let nextsong = document.getElementById("new-song") as HTMLButtonElement;
let start = document.getElementById("start") as HTMLButtonElement;
let pause = document.getElementById("pause") as HTMLButtonElement;
fetch('assets/audiolist.json')
  .then(res => res.json())
  .then((data: any) => {
    Audiolist = data;
  })




//Pause button
audio.onpause = () => {
  pause.innerHTML = "Play";
}
audio.onplay = () => {
  pause.innerHTML = "Pause";
}
pause.onclick = () => {
  if (audio.paused){
audio.play();
  }
  else{
    
    audio.pause();
  }
}

//Next song button
nextsong.onclick = () => {
//removes song from array when it ends and plays a new one
 Audiolist.splice(Audiolist.indexOf(title2.toString()), 1);
//Gets random song
title2 =  Audiolist[Math.floor(Math.random() *  Audiolist.length)];
//Sets author of song
//Gets random song
audio.src =  title2.toString();


//Reload page if no songs are left
if (Audiolist.length == 0){
window.location.reload();
}
}
start.onclick = () => {
  title2 =  Audiolist[Math.floor(Math.random() *  Audiolist.length)];

  audio.src =  title2.toString();
  //Gets title of song
  audio.load();
  audio.play();
  start.style.display = "none";
}
}
}

