import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{

constructor() { }

ngOnInit(): void {
  let titlelement = document.getElementById("title") as HTMLElement;
let   playvideobutton = document.getElementById("playvideo") as HTMLButtonElement;
let pausevideobutton = document.getElementById("pausevideo") as HTMLButtonElement;
let audioenvideo = document.getElementById("video") as HTMLVideoElement;
  let videolist = new Array;
  let titlevideo = new String;
  let title2 = new String;
 let index = 0;
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Labelwilsamenwerken.mp4");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/WatkanjelerenvaneenInstagramvideovandaughtersdiary.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Onderhandelingenfnvenov.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/BezigmeteenAlexaSkill.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/DeERUvoertverbodinopolieuitRusland.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Deknaagdiercastkomtonline.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Dewaarheidoverdevluchtelingencrisis.webm")
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Geencompensatievoorkinderopvang.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Gokreclamesopalgemeenpubliekgaanverbodenworden.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/HamsterAdajawordtgepest.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/JakeDankwoordheeftgezegddathijhomois.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/KlimaatprotestBeverwijk.webm");
videolist.push("vhttps://github.com/rgcreator/Rodenttube/raw/main/KnaagdierlaatgrafsteenmakenvaninternetExplorer.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/MarkdeBeverheeftsms'jesverwijderd.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Nethoutgaatdelenduurdermaken.webm");
videolist.push("video/RadiovijfdrieachtvoorprinsesMaximafoundation.webm");
videolist.push("video/RodenttubestaatindePlayStore.webm");
videolist.push("video/Siebertvanhoutenheeftfraudegepleegdmethoutkapjes.webm");
videolist.push("video/StichtingdeknoevelinMaastricht.webm");
videolist.push("video/Watalsdropshopreclameseerlijkzijn.webm");
videolist.push("video/WatkanjelerenvaneenInstagramvideovandaughtersdiary.webm");
videolist.push("video/Wijalsknaagdierenzeggennietéén.webm");
videolist.push("video/Wijalsknaagdierenzeggenniettwee.webm");
var i = 0;
let next = document.getElementById('volgendevideo') as HTMLButtonElement;
let back = document.getElementById('vorigevideo') as HTMLButtonElement;
playvideobutton.onclick = () => {
  audioenvideo.src = videolist[i].toString();
  audioenvideo.load();
  audioenvideo.play();
  titlelement.innerHTML = videolist[i].replace('https://github.com/rgcreator/Rodenttube/raw/main/', '').toString();
}
pausevideobutton.onclick  = function(){
if (audioenvideo.paused == false){
  audioenvideo.pause();
}else if (audioenvideo.paused == true){

  audioenvideo.play();
}
}

next.onclick = function(){
if (i < videolist.length - 1){
  i++;
  audioenvideo.src = videolist[i].toString();
  audioenvideo.load();
  audioenvideo.play(); 
}
else{
  i = 0;
}
}
back.onclick = () => {
if (i > 0){
  i--;
  audioenvideo.src = videolist[i].toString();
  audioenvideo.load();
  audioenvideo.play(); 
}
else{
  i = videolist.length - 1;
}
}
}
} 