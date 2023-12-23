var audioE = document.getElementById("Estring");
var audioA = document.getElementById("Astring");
var audioD = document.getElementById("Dstring");
var audioG = document.getElementById("Gstring");
var audioB = document.getElementById("Bstring");
var audio_e = document.getElementById("eString");


document.getElementById("btn_e").addEventListener("click",play_e);
document.getElementById("btnB").addEventListener("click",playB);
document.getElementById("btnG").addEventListener("click",playG);
document.getElementById("btnD").addEventListener("click",playD);
document.getElementById("btnA").addEventListener("click",playA);
document.getElementById("btnE").addEventListener("click",playE);


function play_e()
{ 
    audio_e.play();
    if(audio_e.paused) {
        audio_e.play();
   }else{
    audio_e.currentTime = 0;
   }

}

function playB() 
{
    audioB.play();
    if(audioB.paused) {
        audioB.play();
   }else{
    audioB.currentTime = 0;
   }
    
}

function playG() 
{
    audioG.play();
    if(audioG.paused) {
        audioG.play();
   }else{
    audioG.currentTime = 0;
   }

}

function playD() 
{ 
    audioD.play();
    if(audioD.paused) {
       audioD.play();
   }else{
       audioD.currentTime = 0;
   }

}
function playA()
{
    audioA.play();
    if(audioA.paused) {
       audioA.play();
      

   }else{
       audioA.currentTime = 0;
   }

}

function playE() 
{
     audioE.play();
     if(audioE.paused) {
        audioE.play();
    }else{
        audioE.currentTime = 0;
    }
    
}