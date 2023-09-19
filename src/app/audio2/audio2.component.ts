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
let pause = document.getElementById("pause") as HTMLButtonElement;
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Beverindeschulden.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/DitisRodenttube.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Genietvanhetleven.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Ikbeneeneenzamebever.mp3"); 
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Ikknaaghoutvoor.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Kerstbever.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Knagen.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Knagenthout.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/NibbleAgain.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Niemand%20kan%20beter%20knagen%20dan%20ik.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/OBeverburcht.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/RodenttubeRap.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Uiteindelijkmaaktgeldniksuit.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/We%20gaan%20naar%20een%20bos.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Wedden.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Wood.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Zoekdeconnectie.mp3");
Audiolist.push("https://github.com/rgcreator/Rodenttube/raw/main/eetsla.mp3");

title2 =  Audiolist[Math.floor(Math.random() *  Audiolist.length)];
//Sets author of song
//Gets random song
audio.src =  title2.toString();
//Gets title of song
titlelement.innerHTML = title2.replace('https://github.com/rgcreator/Rodenttube/raw/main/', '').toString();
audio.load();
audio.play();



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

//Gets title of song

//Sets title of song
titlelement.innerHTML = titlelement.innerHTML = title2.replace('https://github.com/rgcreator/Rodenttube/raw/main/', '').toString();

//Reload page if no songs are left
if (Audiolist.length == 0){
window.location.reload();
}
}
}
}

