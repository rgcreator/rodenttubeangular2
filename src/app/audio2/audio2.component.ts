import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let clicky: any;

@Component({
  selector: 'app-audio2',
  templateUrl: './audio2.component.html',
  styleUrls: ['./audio2.component.css']
})
export class Audio2Component implements OnInit{

  constructor(private router: Router) { }

ngOnInit(): void {

  let title2 = new String();
  let Audiolist = new Array;
  let audio = document.getElementById("audio") as HTMLAudioElement;
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
if (Audiolist.length == 0){
  alert("Je hebt nu alle knaagdiersongs geluisterd. Nu kan je ze weer opnieuw luisteren in een andere volgorde!")
  // Save current URL
  let currentUrl = this.router.url;
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
  });
} else {
title2 =  Audiolist[Math.floor(Math.random() *  Audiolist.length)];
//Sets author of song
//Gets random song
clicky.log(audio.src.toString());
audio.src =  title2.toString();
console.log(audio.src.toString());
clicky.log(audio.src.toString());
}
}
start.onclick = () => {
  title2 =  Audiolist[Math.floor(Math.random() *  Audiolist.length)];

  audio.src =  title2.toString();
  audio.load();
  audio.play();
  clicky.log(audio.src.toString());
  start.style.display = "none";
}
}
}

