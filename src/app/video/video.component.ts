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
let iframe = document.getElementById("iframe") as HTMLIFrameElement;
let audioenvideo = document.getElementById("video") as HTMLVideoElement;
  let videolist = new Array;
  let titlevideo = new String;
  let title2 = new String;
 let index = 0;
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Labelwilsamenwerken%20(2).webm?updatedAt=1695197060785");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/GavanYTaf.webm?updatedAt=1695142495921");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/WatkanjelerenvaneenInstagramvideovandaughtersdiary%20(1).webm?updatedAt=1695196926481");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/ApplewilManchesterUnitedovernemenmeme.webm?updatedAt=1695142438327");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Onderhandelingenfnvenov.webm?updatedAt=1695142515837");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/BezigmeteenAlexaSkill.webm?updatedAt=1695142494027");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/DeERUvoertverbodinopolieuitRusland.webm?updatedAt=1695142441089");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Deknaagdiercastkomtonline.webm?updatedAt=1695197905737");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Dewaarheidoverdevluchtelingencrisis.webm?updatedAt=1695142453536")
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Geencompensatievoorkinderopvang.webm?updatedAt=1695142452858");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Gokreclamesopalgemeenpubliekgaanverbodenworden.webm?updatedAt=1695142443035");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/HamsterAdajawordtgepest.webm?updatedAt=1695142449610");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/JakeDankwoordheeftgezegddathijhomois.webm?updatedAt=1695142457949");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/KlimaatprotestBeverwijk.webm?updatedAt=1695142470736");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/KnaagdierlaatgrafsteenmakenvaninternetExplorer.webm?updatedAt=1695142460077");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/MarkdeBeverheeftsms'jesverwijderd.webm");
videolist.push("https://github.com/rgcreator/Rodenttube/raw/main/Nethoutgaatdelenduurdermaken.webm");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/RadiovijfdrieachtvoorprinsesMaximafoundation.webm?updatedAt=1695142516946");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/RodenttubestaatindePlayStore%20(1).webm?updatedAt=1695198366764");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Siebertvanhoutenheeftfraudegepleegdmethoutkapjes.webm?updatedAt=1695142497725");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/StichtingdeknoevelinMaastricht.webm?updatedAt=1695142515871");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Watalsdropshopreclameseerlijkzijn.webm?updatedAt=1695142518642");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Wijalsknaagdierenzeggenniet%C3%A9%C3%A9n.webm?updatedAt=1695142509094");
videolist.push("https://ik.imagekit.io/fcknaagdier/Rodenttube%20videos/Wijalsknaagdierenzeggenniettwee.webm?updatedAt=1695142504945");
var i = 0;
let next = document.getElementById('volgendevideo') as HTMLButtonElement;
let back = document.getElementById('vorigevideo') as HTMLButtonElement;
playvideobutton.onclick = () => {
  audioenvideo.src = videolist[i].toString();
  audioenvideo.load();
  audioenvideo.play();
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