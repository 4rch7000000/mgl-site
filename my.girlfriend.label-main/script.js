// MGL SYSTEM CORE
// RECOVERY MODE


let logoClicks = 0;

const logo = document.getElementById("logo");
const archive = document.getElementById("archive");




// =====================
// ARCHIVE RECOVERED
// =====================


logo.addEventListener("click",()=>{


logoClicks++;


if(logoClicks >= 7){


archive.style.display="flex";



let glitch = setInterval(()=>{


archive.innerHTML = 
Math.random()>0.5 ?

"ARCHIVE RECOVERED"

:

"ARCH1VE_REC0VERED";


},50);



setTimeout(()=>{


clearInterval(glitch);

archive.style.display="none";


},6000);



logoClicks=0;


}



});





// =====================
// RANDOM SYSTEM ERRORS
// =====================


const events=[

"signal lost",

"recovering",

"who is arch?",

"audio recovered",

"file corrupted",

"connection lost",

"memory fragment found"

];



function systemFlash(){


let flash=document.getElementById("flash");


flash.innerHTML=
events[
Math.floor(Math.random()*events.length)
];



flash.style.display="flex";



let duration =
Math.floor(Math.random()*500)+100;



setTimeout(()=>{


flash.style.display="none";


},duration);



}




setInterval(()=>{


let chance=Math.random();


if(chance < 0.12){


systemFlash();


}


},5000);







// =====================
// TERMINAL
// =====================



const terminal=
document.getElementById("terminal");


const input=
document.getElementById("terminalInput");


const output=
document.getElementById("terminalOutput");




document.addEventListener("keydown",(e)=>{


if(e.key==="t" || e.key==="T"){


terminal.style.display="block";


input.focus();


}



if(e.key==="Control"){


terminal.style.display="none";


}



});







// COMMANDS


input.addEventListener("keydown",(e)=>{


if(e.key==="Enter"){



let command=input.value;



output.innerHTML +=
"\n>" + command;



switch(command){



case ">help":


output.innerHTML +=`




MGL LOST MEDIA DATABASE


====================


ARCH:

- там где не пройти можно упасть


NASTY:

- Weirdo12


CODE31:

- Broken vinyl


TWELVE:

- IDONTWANNABEANYNMORE


STYLE:

- 505


PS4:

- Clear



END OF ARCHIVE



`;

break;






case ">void":


output.innerHTML +=`


VOID ACCESS GRANTED



THEY ARE DEAD.


THERE ARE GONE.



THEY ARE DEAD.


THERE ARE GONE.



THEY ARE DEAD.


THERE ARE GONE.



THE SIGNAL REMAINS.






`;

break;





case ">clear":


output.innerHTML=">";

break;





case ">who":


output.innerHTML+=`


UNKNOWN ENTITY:


ARCH


STATUS:


MISSING



`;

break;





default:


output.innerHTML+=`

UNKNOWN COMMAND

TYPE >help


`;



}



input.value="";


}



});







// =====================
// RANDOM SCREEN DAMAGE
// =====================



setInterval(()=>{


if(Math.random()<0.2){


document.body.style.transform=

`
translate(
${Math.random()*6-3}px,
${Math.random()*6-3}px
)
`;



setTimeout(()=>{


document.body.style.transform="";


},80);



}



},3000);






// =====================
// BOOT TEXT RANDOMIZATION
// =====================


let boot=document.querySelector("#boot div");


let bootMessages=[

"MGL SYSTEM",

"RECOVERING DATA",

"SEARCHING ARCHIVE",

"LOADING LOST FILES",

"ACCESSING VOID"

];


setInterval(()=>{


boot.innerHTML=

bootMessages[
Math.floor(Math.random()*bootMessages.length)
]
+
"<br><br>████████████ 100%";


},700);
