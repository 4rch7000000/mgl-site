// ==========================
// MGL SYSTEM
// ==========================

const boot = document.getElementById("boot");
const bootFill = document.getElementById("bootFill");

const logo = document.getElementById("logo");

const archive = document.getElementById("archive");

const terminal = document.getElementById("terminal");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

const artistPage = document.getElementById("artistPage");
const artistTitle = document.getElementById("artistTitle");
const artistContent = document.getElementById("artistContent");

const closeArtist = document.getElementById("closeArtist");

const voidScreen = document.getElementById("voidScreen");

const eventScreen = document.getElementById("eventScreen");
const eventText = document.getElementById("eventText");

const flash = document.getElementById("flash");

const randomMessage = document.getElementById("randomMessage");

let logoClicks = 0;

let terminalOpened = false;


// ==========================
// BOOT
// ==========================

let progress = 0;

const bootInterval = setInterval(()=>{

progress++;

bootFill.style.width = progress + "%";

if(progress >= 100){

clearInterval(bootInterval);

setTimeout(()=>{

boot.style.display="none";

},600);

}

},25);


// ==========================
// TERMINAL
// ==========================

document.addEventListener("keydown",(e)=>{

if(e.key==="t" || e.key==="T"){

if(terminalOpened) return;

terminal.style.display="block";

terminalOpened=true;

terminalInput.focus();

}

if(e.key==="Control"){

terminal.style.display="none";

terminalOpened=false;

}

});




// ==========================
// COMMANDS
// ==========================

terminalInput.addEventListener("keydown",(e)=>{

if(e.key!=="Enter") return;

let command=terminalInput.value.trim().toLowerCase();

terminalOutput.innerHTML+="<br>>"+command;

switch(command){

case ">help":

terminalOutput.innerHTML+=`

<br><br>

COMMANDS

<br>

>help

<br>

>void

<br>

>artists

<br>

>clear

`;

break;



case ">artists":

terminalOutput.innerHTML+=`

<br><br>

ARCH

<br>

NASTY

<br>

CODE31

<br>

TWELVE

<br>

STYLE

<br>

PS4

`;

break;



case ">clear":

terminalOutput.innerHTML=">";

break;



case ">void":

startVoid();

break;



default:

terminalOutput.innerHTML+=`

<br>

UNKNOWN COMMAND

`;

}

terminalInput.value="";

});




// ==========================
// ARTISTS
// ==========================

document.querySelectorAll(".artist").forEach(card=>{

card.onclick=()=>{

artistPage.style.display="flex";

artistTitle.textContent=

card.querySelector(".artistName").textContent;

artistContent.innerHTML=`

STATUS : UNKNOWN

<br><br>

LAST SIGNAL :

03:33

<br><br>

FILES FOUND :

12

`;

};

});



closeArtist.onclick=()=>{

artistPage.style.display="none";

};

// ==========================
// VOID EVENT
// ==========================

function whiteFlash(time = 120){

    flash.style.opacity = "1";
    flash.style.animation = "flashWhite .15s";

    setTimeout(()=>{

        flash.style.opacity = "0";
        flash.style.animation = "";

    },time);

}



function startVoid(){

    terminal.style.display="none";

    terminalOpened=false;

    let flashes = 0;

    const interval = setInterval(()=>{

        whiteFlash();

        flashes++;

        if(flashes >= 8){

            clearInterval(interval);

            voidScreen.style.display="flex";

            document.body.style.background="#fff";

            document.body.style.color="#000";

            document.body.style.animation="glitchShake .08s infinite";

        }

    },170);

}



// ==========================
// RANDOM EVENTS
// ==========================

const events=[

"SIGNAL LOST",

"RECOVERING",

"WHO IS ARCH?",

"AUDIO RECOVERED"

];



setInterval(()=>{

    if(Math.random()>0.96){

        eventText.textContent=

        events[Math.floor(Math.random()*events.length)];

        eventScreen.style.display="flex";

        whiteFlash();

        setTimeout(()=>{

            eventScreen.style.display="none";

        },140);

    }

},2500);



// ==========================
// LOGO SECRET
// ==========================

logo.addEventListener("click",()=>{

    logoClicks++;

    if(logoClicks<7) return;

    logoClicks=0;

    archive.style.display="flex";

    let i=0;

    const horror=setInterval(()=>{

        whiteFlash(70);

        document.body.style.animation="glitchShake .06s";

        archive.style.filter=`invert(${i%2})`;

        i++;

        if(i>20){

            clearInterval(horror);

            document.body.style.animation="";

            archive.style.filter="";

        }

    },90);

});



// ==========================
// GLITCH
// ==========================

setInterval(()=>{

    document.body.style.transform=

    `translate(${Math.random()*6-3}px,${
    Math.random()*6-3}px)`;

    setTimeout(()=>{

        document.body.style.transform="";

    },60);

},6000);



// ==========================
// BIOS
// ==========================

setTimeout(()=>{

    const bios=document.getElementById("bios");

    bios.style.display="block";

    setTimeout(()=>{

        bios.style.display="none";

    },900);

},5000);



// ==========================
// FLICKER
// ==========================

setInterval(()=>{

    document.body.style.animation="flicker .18s";

    setTimeout(()=>{

        document.body.style.animation="";

    },180);

},12000);



// ==========================
// TERMINAL SCROLL
// ==========================

setInterval(()=>{

    terminalOutput.scrollTop=

    terminalOutput.scrollHeight;

},100);



// ==========================
// ESC
// ==========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        archive.style.display="none";

        artistPage.style.display="none";

        voidScreen.style.display="none";

        document.body.style.background="#000";

        document.body.style.color="#fff";

        document.body.style.animation="";

    }

});

// ==========================
// FILE DATABASE
// ==========================

const database={

arch:{
status:"UNKNOWN",
files:[
"broken_voice.wav",
"signal.mp3",
"recover.aif"
]
},

nasty:{
status:"ACTIVE",
files:[
"clear.wav",
"505.wav"
]
},

code31:{
status:"LOST",
files:[
"idontwannabeanymore.wav",
"broken_vinyl.wav"
]
},

twelve:{
status:"RECOVERED",
files:[
"weirdo12.wav"
]
},

style:{
status:"UNKNOWN",
files:[
"style_demo.wav"
]
},

ps4:{
status:"ACTIVE",
files:[
"ps4.wav"
]
}

};

document.querySelectorAll(".artist").forEach(card=>{

card.onclick=()=>{

const id=card.dataset.page;

const data=database[id];

artistPage.style.display="flex";

artistTitle.textContent=id.toUpperCase();

artistContent.innerHTML=`
STATUS : ${data.status}

<br><br>

FILES

<br><br>

${data.files.join("<br>")}

`;

};

});



// ==========================
// GLITCH MESSAGE
// ==========================

function randomMessageFlash(){

const list=[

"SIGNAL LOST",

"WHO IS ARCH?",

"AUDIO RECOVERED",

"RECOVERING",

"ERROR 333",

"MEMORY FAILURE",

"UNKNOWN ENTITY",

"FILE REMOVED"

];

randomMessage.innerText=

list[Math.floor(Math.random()*list.length)];

randomMessage.style.opacity="1";

whiteFlash(60);

setTimeout(()=>{

randomMessage.style.opacity="0";

},120);

}

setInterval(()=>{

if(Math.random()<0.04){

randomMessageFlash();

}

},3000);



// ==========================
// SCREEN GLITCH
// ==========================

function heavyGlitch(){

let amount=0;

const glitch=setInterval(()=>{

document.body.style.transform=`
translate(${Math.random()*20-10}px,
${Math.random()*20-10}px)
skew(${Math.random()*4-2}deg)
`;

flash.style.opacity=Math.random();

amount++;

if(amount>25){

clearInterval(glitch);

document.body.style.transform="";

flash.style.opacity=0;

}

},45);

}



// ==========================
// ARCHIVE HORROR
// ==========================

logo.addEventListener("click",()=>{

if(logoClicks!==0)return;

heavyGlitch();

});



// ==========================
// SECRET COMMANDS
// ==========================

terminalInput.addEventListener("keydown",(e)=>{

if(e.key!=="Enter")return;

const cmd=terminalInput.value.trim().toLowerCase();

switch(cmd){

case ">recover":

terminalOutput.innerHTML+=`

<br>

RECOVERING FILES...

<br>

██████████

<br>

DONE.

`;

break;

case ">signal":

terminalOutput.innerHTML+=`

<br>

SIGNAL : ${Math.floor(Math.random()*100)}%

`;

break;

case ">mgl":

terminalOutput.innerHTML+=`

<br>

UNKNOWN ORGANIZATION

`;

break;

case ">clearall":

terminalOutput.innerHTML=">";

break;

}

});

// ==========================
// VHS DAMAGE EFFECT
// ==========================

function vhsDamage(){

    document.body.style.filter =
    "contrast(250%) brightness(150%)";

    document.body.style.transform =
    `translate(${Math.random()*30-15}px,0)`;

    setTimeout(()=>{

        document.body.style.filter="";

        document.body.style.transform="";

    },120);

}


setInterval(()=>{

    if(Math.random()<0.03){

        vhsDamage();

    }

},2000);




// ==========================
// ARCHIVE COMMAND
// ==========================

const oldTerminalHandler = terminalInput.onkeydown;


document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        let command = terminalInput.value
        .trim()
        .toLowerCase();


        if(command === ">archive"){

            terminalOutput.innerHTML += `

<br><br>

ARCHIVE DATABASE

<br><br>

[FOUND]

<br>

arch.wav

<br>

broken_vinyl.wav

<br>

weirdo12.wav

<br>

clear.wav

<br>

505.wav

`;

        }


        if(command === ">files"){

            terminalOutput.innerHTML +=`

<br><br>

RECOVERED FILES:

<br>

6 ARTISTS

<br>

12 AUDIO FILES

<br>

UNKNOWN DATA

`;

        }

    }

});




// ==========================
// RANDOM SYSTEM TEXT
// ==========================

const systemTexts=[

"PACKET LOST",

"BUFFER ERROR",

"DATA CORRUPTED",

"SIGNAL RETURNED",

"VOICE RECOVERED",

"ARCH FOUND"

];


function systemGlitch(){

    const text =
    systemTexts[
    Math.floor(Math.random()*systemTexts.length)
    ];


    eventText.textContent=text;

    eventScreen.style.display="flex";


    setTimeout(()=>{

        eventScreen.style.display="none";

    },200);


}


setInterval(()=>{

    if(Math.random()<0.025){

        systemGlitch();

    }

},5000);




// ==========================
// DOUBLE CLICK MGL SECRET
// ==========================

let secretClicks=0;


logo.addEventListener("dblclick",()=>{

    secretClicks++;


    if(secretClicks>=3){

        heavyGlitch();


        eventText.textContent=
        "ARCHIVE UNSTABLE";


        eventScreen.style.display="flex";


        setTimeout(()=>{

            eventScreen.style.display="none";

            secretClicks=0;

        },1000);

    }

});




// ==========================
// DISABLED SCREEN
// ==========================

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});




// ==========================
// CURSOR ERROR
// ==========================

setInterval(()=>{

    if(Math.random()<0.02){

        document.body.style.cursor="crosshair";


        setTimeout(()=>{

            document.body.style.cursor="default";

        },300);

    }

},4000);

// ==========================
// FULL VOID SEQUENCE
// ==========================

function startVoidSequence(){

    terminal.style.display="none";

    const frames=[

        "SIGNAL LOST",

        "RECOVERING",

        "WHO IS ARCH?",

        "FILE CORRUPTED",

        "THEY ARE DEAD.",

        "THEY ARE GONE."

    ];


    let index=0;


    voidScreen.style.display="flex";


    const sequence=setInterval(()=>{


        voidText.innerHTML=
        frames[index];


        if(index%2===0){

            whiteFlash(80);

        }


        heavyGlitch();


        index++;


        if(index>=frames.length){


            clearInterval(sequence);


            setTimeout(()=>{


                voidScreen.style.display="none";


                document.body.style.background="#000";

                document.body.style.color="#fff";


            },3000);


        }


    },700);

}



// ==========================
// OVERRIDE VOID COMMAND
// ==========================

const oldVoid = startVoid;


startVoid=function(){

    startVoidSequence();

};




// ==========================
// ARTIST CORRUPTION
// ==========================

const corruptedNames={

ARCH:[
"ARCH",
"A_R_C_H",
"UNKNOWN"
],

NASTY:[
"NASTY",
"N4STY",
"ERROR"
],

CODE31:[
"CODE31",
"CODE_???",
"LOST"
],

TWELVE:[
"TWELVE",
"12",
"UNKNOWN"
],

STYLE:[
"STYLE",
"STYLE.BIN",
"FAILED"
],

PS4:[
"PS4",
"PS4_DATA",
"REMOVED"
]

};



setInterval(()=>{


document.querySelectorAll(".artistName")
.forEach(el=>{


if(Math.random()<0.05){


let original=
el.innerText;


let list=
corruptedNames[original];


if(list){


el.innerText=
list[Math.floor(Math.random()*list.length)];


setTimeout(()=>{

el.innerText=original;

},300);


}


}



});


},3000);




// ==========================
// AUDIO DATABASE EVENTS
// ==========================

function audioRecovered(){

eventText.innerHTML=
"AUDIO RECOVERED";


eventScreen.style.display="flex";


whiteFlash();


setTimeout(()=>{

eventScreen.style.display="none";

},500);


}



setInterval(()=>{

if(Math.random()<0.01){

audioRecovered();

}

},8000);

// ==========================
// ARCHIVE RECOVERED SEQUENCE
// ==========================

let archiveUnlocked = false;


function openArchiveSequence(){

    archiveUnlocked=true;


    const messages=[

        "ACCESSING ARCHIVE",

        "CHECKING FILES",

        "DATA FOUND",

        "ARCHIVE RECOVERED",

    ];


    let step=0;


    archive.style.display="flex";


    const timer=setInterval(()=>{


        archive.querySelector("h1").innerText =
        messages[step];


        heavyGlitch();


        whiteFlash(60);


        step++;


        if(step>=messages.length){


            clearInterval(timer);


            archive.querySelector("p").innerHTML=`

WARNING

<br><br>

RECOVERED FILES:

<br><br>

arch.wav

<br>

broken_vinyl.wav

<br>

weirdo12.wav

<br>

clear.wav

<br>

505.wav

<br><br>

STATUS:

PARTIALLY RESTORED

`;

        }


    },800);

}



// ==========================
// 7 CLICKS MGL
// ==========================

let mglCounter=0;


logo.onclick=function(){


    mglCounter++;


    heavyGlitch();


    if(mglCounter>=7){


        mglCounter=0;


        openArchiveSequence();


    }

};




// ==========================
// SECRET 404
// ==========================


function open404(){

    const page =
    document.getElementById("secret404");


    page.style.display="block";


    document.body.innerHTML+=`

<div id="errorOverlay">

404

<br><br>

YOU WERE NOT SUPPOSED TO SEE THIS

<br><br>

RETURN?

</div>

`;

}



window.addEventListener("error",()=>{


    if(Math.random()<0.3){

        open404();

    }


});




// ==========================
// RANDOM WHITE NOISE FLASH
// ==========================


function noiseFlash(){


    let old =
    document.body.style.filter;


    document.body.style.filter =
    "invert(1)";


    setTimeout(()=>{


        document.body.style.filter=old;


    },40);


}



setInterval(()=>{


    if(Math.random()<0.02){


        noiseFlash();


    }


},5000);




// ==========================
// ARCH PAGE DETAILS
// ==========================


const archData={


arch:`

NAME: ARCH

<br><br>

TYPE: UNKNOWN

<br><br>

LAST AUDIO:

CORRUPTED

<br><br>

SIGNAL:

03:33

`,


nasty:`

NAME: NASTY

<br><br>

STATUS:

ACTIVE

<br><br>

FILES:

5

`,


code31:`

NAME: CODE31

<br><br>

STATUS:

LOST

<br><br>

DATA:

UNSTABLE

`,


twelve:`

NAME: TWELVE

<br><br>

STATUS:

RECOVERED

`,


style:`

NAME: STYLE

<br><br>

STATUS:

UNKNOWN

`,


ps4:`

NAME: PS4

<br><br>

STATUS:

ACTIVE

`

};


document.querySelectorAll(".artist")
.forEach(card=>{


card.addEventListener("click",()=>{


let id=card.dataset.page;


if(archData[id]){


artistContent.innerHTML=
archData[id];


}



});


});

// ==========================
// TERMINAL EXTRA COMMANDS
// ==========================

const extraCommands = {

">audio":`

<br><br>

AUDIO DATABASE

<br><br>

[CONNECTED]

<br><br>

SOUNDCLOUD ARCHIVE:

<br>

https://soundcloud.com/hskaowkebeg-shia

`,


">lost":`

<br><br>

SEARCHING...

<br><br>

FILE NOT FOUND

<br>

SIGNAL LOST

`,


">who":`

<br><br>

WHO IS ARCH?

<br><br>

NO DATA AVAILABLE

<br>

ONLY SIGNAL REMAINS

`,


">status":`

<br><br>

MGL SYSTEM STATUS

<br><br>

ARCHIVE: ONLINE

<br>

AUDIO: RECOVERED

<br>

SIGNAL: UNSTABLE

`,


">exit":`

<br><br>

TERMINAL CLOSING...

`

};



terminalInput.addEventListener("keydown",(e)=>{


if(e.key!=="Enter") return;


let cmd =
terminalInput.value.trim().toLowerCase();



if(extraCommands[cmd]){


terminalOutput.innerHTML +=
extraCommands[cmd];


}



if(cmd === ">exit"){


setTimeout(()=>{


terminal.style.display="none";

terminalOpened=false;


},500);


}



});




// ==========================
// FAKE FILE OPENING
// ==========================


document.querySelectorAll(".audioButton")
.forEach(button=>{


button.addEventListener("click",()=>{


eventText.innerHTML=
"AUDIO CONNECTED";


eventScreen.style.display="flex";


whiteFlash(100);


setTimeout(()=>{


eventScreen.style.display="none";


},600);



});


});




// ==========================
// SCREEN RANDOM DISTORTION
// ==========================


function distortion(){


const x =
Math.random()*12-6;


const y =
Math.random()*12-6;



document.body.style.transform =
`
translate(${x}px,${y}px)
`;



setTimeout(()=>{


document.body.style.transform="";


},80);


}



setInterval(()=>{


if(Math.random()<0.04){


distortion();


}


},3000);




// ==========================
// ARCHIVE CLOSE
// ==========================


archive.addEventListener("click",()=>{


if(archiveUnlocked){


archive.style.display="none";


}


});




// ==========================
// START MESSAGE
// ==========================


setTimeout(()=>{


if(Math.random()<0.5){


eventText.innerHTML=
"RECOVERING";


eventScreen.style.display="flex";


setTimeout(()=>{


eventScreen.style.display="none";


},300);


}


},15000);

// ==========================
// BIOS RANDOM BOOT EVENTS
// ==========================

function biosBoot(){

    const bios =
    document.getElementById("bios");


    bios.style.display="block";


    heavyGlitch();


    setTimeout(()=>{


        bios.style.display="none";


    },1800);

}



setInterval(()=>{


    if(Math.random()<0.01){


        biosBoot();


    }


},15000);




// ==========================
// ARTIST UNIQUE GLITCH
// ==========================


const glitchChars =
"█▓▒░#@$%&";


function corruptText(text){


let result="";


for(let i=0;i<text.length;i++){


if(Math.random()<0.25){


result +=
glitchChars[
Math.floor(Math.random()*glitchChars.length)
];


}

else{


result += text[i];


}


}


return result;


}



document.querySelectorAll(".artist")
.forEach(card=>{


card.addEventListener("mouseenter",()=>{


if(Math.random()<0.4){


const title =
card.querySelector(".artistName");


const old =
title.innerText;


title.innerText =
corruptText(old);


setTimeout(()=>{


title.innerText=old;


},300);


}


});


});




// ==========================
// FINAL UNKNOWN EVENT
// ==========================


function unknownEvent(){


const texts=[


"DO NOT RESTORE",


"ARCHIVE WATCHING",


"CONNECTION FAILED",


"UNKNOWN USER",


"FILE 000 FOUND"


];


eventText.innerText =
texts[
Math.floor(Math.random()*texts.length)
];


eventScreen.style.display="flex";


heavyGlitch();


setTimeout(()=>{


eventScreen.style.display="none";


},700);


}



setInterval(()=>{


if(Math.random()<0.015){


unknownEvent();


}


},7000);




// ==========================
// HIDDEN KEY
// ==========================


let keySequence="";


document.addEventListener("keydown",(e)=>{


keySequence += e.key.toLowerCase();


if(keySequence.length>10){


keySequence =
keySequence.slice(-10);


}



if(keySequence.includes("archive")){


openArchiveSequence();


keySequence="";


}



});




// ==========================
// AUDIO RECOVER LOOP
// ==========================


function audioRecoveredLong(){


eventScreen.style.display="flex";


eventText.innerHTML=
`
AUDIO RECOVERED

<br><br>

FILE READY
`;



let count=0;


const loop=setInterval(()=>{


whiteFlash(50);

count++;


if(count>5){


clearInterval(loop);


eventScreen.style.display="none";


}


},300);


}



setInterval(()=>{


if(Math.random()<0.008){


audioRecoveredLong();


}


},20000);

// ==========================
// MGL FINAL SYSTEM
// ==========================


// SAVE DATA

if(localStorage.getItem("MGL_ARCHIVE") === "true"){

    archiveUnlocked = true;

}



// ==========================
// SAVE ARCHIVE
// ==========================

const oldOpenArchive = openArchiveSequence;


openArchiveSequence = function(){


    localStorage.setItem(
        "MGL_ARCHIVE",
        "true"
    );


    oldOpenArchive();


};




// ==========================
// ENDING
// ==========================

function startEnding(){


    terminal.style.display="none";


    let endingScreen =
    document.createElement("div");


    endingScreen.id =
    "endingScreen";


    endingScreen.innerHTML = `

    <div>

    MGL FINAL RECOVERY

    <br><br>

    ALL FILES RESTORED

    <br><br>

    ARCHIVE:

    COMPLETE

    <br><br>

    SIGNAL:

    STILL ACTIVE

    <br><br>

    THANK YOU FOR LISTENING

    </div>

    `;


    document.body.appendChild(
        endingScreen
    );



    heavyGlitch();



    let flashes=0;


    const endInterval =
    setInterval(()=>{


        whiteFlash(80);


        flashes++;


        if(flashes>8){


            clearInterval(endInterval);


        }


    },400);


}




// ==========================
// TERMINAL ENDING COMMAND
// ==========================

terminalInput.addEventListener(
"keydown",
(e)=>{


if(e.key==="Enter"){


let cmd =
terminalInput.value
.trim()
.toLowerCase();



if(cmd === ">ending"){


startEnding();


terminalOutput.innerHTML += `

<br>

ENDING STARTED

`;

}



}


});




// ==========================
// FINAL KEY SEQUENCE
// ==========================

let finalKeys="";


document.addEventListener(
"keydown",
(e)=>{


finalKeys +=
e.key.toLowerCase();



if(finalKeys.includes("mgl")){


if(archiveUnlocked){


eventText.innerHTML =
"ARCHIVE REMEMBERED";


eventScreen.style.display =
"flex";


whiteFlash();


setTimeout(()=>{


eventScreen.style.display =
"none";


},800);


}


finalKeys="";


}


});




// ==========================
// CLEAN EXIT
// ==========================

document.addEventListener(
"keydown",
(e)=>{


if(e.key==="Escape"){


const ending =
document.getElementById(
"endingScreen"
);


if(ending){


ending.remove();


}


}


});
