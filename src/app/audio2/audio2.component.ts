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
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Wedden.mp3?updatedAt=1695195512422");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Zoek%20de%20connectie.mp3?updatedAt=1695195511349");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/We%20gaan%20naar%20een%20bos.mp3?updatedAt=1695195511384");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Zoekdeconnectie.mp3?updatedAt=1695195509274");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Niemand%20kan%20beter%20knagen%20dan%20ik.mp3?updatedAt=1695195508796");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Genietvanhetleven.mp3?updatedAt=1695195508420");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Wood.mp3?updatedAt=1695195507746");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Wegaannaareenbos.mp3?updatedAt=1695195507694");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Ikgaknagen.mp3?updatedAt=1695195505715");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Uiteindelijkmaaktgeldniksuit.mp3?updatedAt=1695195504435");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Uiteindelijk%20maakt%20geld%20niks%20uit.mp3?updatedAt=1695195503776");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Niemandkanbeterknagendanik.mp3?updatedAt=1695195501297");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Ikbeneeneenzamebever.mp3?updatedAt=1695195500986");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/NibbleAgain.mp3?updatedAt=1695195500588");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/RodenttubeRap.mp3?updatedAt=1695195499934");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/OBeverburcht.mp3?updatedAt=1695195499699");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Knagenthout.mp3?updatedAt=1695195498606");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Ikknaaghoutvoor.mp3?updatedAt=1695195496167");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/eetsla.mp3?updatedAt=1695195494562");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Knagen.mp3?updatedAt=1695195494424");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Beverindeschulden.mp3?updatedAt=1695195494422");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/DitisRodenttube.mp3?updatedAt=1695195494279");
Audiolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20muziek/Kerstbever.mp3?updatedAt=1695195493830");
title2 =  Audiolist[Math.floor(Math.random() *  Audiolist.length)];
//Sets author of song
//Gets random song
audio.src =  title2.toString();
//Gets title of song
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

//Reload page if no songs are left
if (Audiolist.length == 0){
window.location.reload();
}
}
}
}

