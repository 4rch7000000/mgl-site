const terminal = document.getElementById("terminal");
const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");

const logo = document.getElementById("logo");
const archive = document.getElementById("archive");
const voidScreen = document.getElementById("void");
const eventScreen = document.getElementById("event");

let clicks = 0;



// CLOCK

setInterval(()=>{

    document.getElementById("clock").innerHTML =
    new Date().toLocaleTimeString();

},1000);





// TERMINAL OPEN

document.addEventListener("keydown", e=>{


    if(e.key.toLowerCase()=="t"){

        terminal.style.display="block";

        input.focus();

    }



    if(e.key=="Control"){

        terminal.style.display="none";

    }


});







// TERMINAL COMMANDS


input.addEventListener("keydown", e=>{


    if(e.key=="Enter"){


        let cmd=input.value.toLowerCase().trim();


        output.innerHTML += "<br>>"+cmd;



        if(cmd=="help"){


            output.innerHTML += `

<br><br>

MGL LOST FILES:

<br><br>

там где не пройти можно упасть

<br>

Weirdo12

<br>

Broken vinyl

<br>

IDONTWANNABEANYNMORE

<br>

505

<br>

Clear

`;

        }




        if(cmd=="void"){


            terminal.style.display="none";


            voidEvent();


        }




        if(cmd=="clear"){


            output.innerHTML=">";

        }



        input.value="";

    }


});









// VOID EVENT


function voidEvent(){


    let frames=[

    "SIGNAL LOST",

    "NO USER FOUND",

    "FILE: DEAD",

    "WHO IS ARCH?"

    ];



    let i=0;



    let interval=setInterval(()=>{


        eventScreen.style.display="flex";

        eventScreen.innerHTML=frames[i];


        i++;


        if(i>=frames.length){


            clearInterval(interval);



            setTimeout(()=>{


                eventScreen.style.display="none";


                voidScreen.style.display="flex";



                setTimeout(()=>{


                    voidScreen.style.display="none";


                },5000);



            },300);


        }


    },200);


}









// 7 CLICKS ARCHIVE


logo.addEventListener("click",()=>{


    clicks++;



    if(clicks==7){


        scaryFlash();



        setTimeout(()=>{


            archive.style.display="flex";



        },700);



        setTimeout(()=>{


            archive.style.display="none";


        },7000);



        clicks=0;


    }



});








// ARCHIVE FLASH


function scaryFlash(){


    let count=0;



    let flash=setInterval(()=>{


        document.body.classList.toggle("flash");


        count++;



        if(count>10){


            clearInterval(flash);

            document.body.classList.remove("flash");


        }


    },80);


}









// ARTISTS


document.querySelectorAll(".artist").forEach(card=>{


    card.addEventListener("click",()=>{


        eventScreen.style.display="flex";


        eventScreen.innerHTML=

        `

FILE RECOVERED

<br><br>

${card.dataset.name}

<br><br>

STATUS: UNKNOWN

`;



        setTimeout(()=>{


            eventScreen.style.display="none";


        },3000);



    });


});








// RANDOM SIGNALS


let messages=[

"SIGNAL LOST",

"RECOVERING",

"WHO IS ARCH?",

"AUDIO RECOVERED"

];



setInterval(()=>{


    if(Math.random()<0.07){


        eventScreen.style.display="flex";


        eventScreen.innerHTML=

        messages[Math.floor(Math.random()*messages.length)];



        setTimeout(()=>{


            eventScreen.style.display="none";


        },300);



    }


},6000);
