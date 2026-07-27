* {
    box-sizing:border-box;
}


body {

    margin:0;

    background:#000;

    color:#fff;

    font-family:monospace;

    overflow:hidden;

}





/* SYSTEM START */

#system {

    position:fixed;

    inset:0;

    background:#000;

    display:flex;

    justify-content:center;

    align-items:center;

    text-align:center;

    font-size:22px;

    letter-spacing:5px;

    z-index:99999;

    animation:boot 4s forwards;

}



@keyframes boot {

    0% {
        opacity:1;
    }


    80% {
        opacity:1;
    }


    100% {

        opacity:0;

        pointer-events:none;

    }

}






/* SCREEN EFFECTS */


.scan {

    position:fixed;

    inset:0;

    background:

    repeating-linear-gradient(

    0deg,

    transparent 0px,

    transparent 3px,

    rgba(255,255,255,.12) 4px

    );

    z-index:20;

    pointer-events:none;

}



.noise {

    position:fixed;

    inset:0;

    opacity:.05;

    background:

    repeating-linear-gradient(

    90deg,

    white 0px,

    white 1px,

    transparent 2px,

    transparent 5px

    );


    animation:noise .15s infinite;

}




@keyframes noise {

    0% {

        transform:translateX(0);

    }


    50% {

        transform:translateX(-10px);

    }


    100% {

        transform:translateX(10px);

    }

}






/* LOGO */


#logo {

    position:fixed;

    top:20px;

    left:25px;

    font-size:40px;

    cursor:pointer;

    z-index:100;

    animation:flicker 2s infinite;

}



#clock {

    position:fixed;

    top:25px;

    right:30px;

    font-size:18px;

}





/* MAIN */


main {

    text-align:center;

    padding-top:120px;

}



h1 {

    font-size:65px;

    letter-spacing:15px;

    animation:flicker 3s infinite;

}





#status {

    margin-top:30px;

    opacity:.7;

}





/* ARTISTS */


section {

    display:flex;

    justify-content:center;

    gap:25px;

    flex-wrap:wrap;

    margin-top:80px;

}




.artist {

    width:180px;

    height:120px;

    border:2px solid white;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:25px;

    cursor:pointer;

    transition:.2s;

}




.artist:hover {


    background:white;

    color:black;

    transform:skew(-12deg);

}






/* AUDIO */


#audio {

    margin-top:60px;

}



#audio a {


    display:inline-block;

    margin-top:15px;

    padding:12px 30px;

    border:2px solid white;

    color:white;

    text-decoration:none;

}



#audio a:hover {

    background:white;

    color:black;

}





#terminalHint {

    position:fixed;

    bottom:20px;

    left:25px;

    opacity:.6;

}





/* TERMINAL */


#terminal {


    display:none;


    position:fixed;


    inset:12%;


    background:black;


    border:2px solid white;


    z-index:5000;


    padding:20px;


}



.terminalHead {


    border-bottom:1px solid white;

    padding-bottom:15px;

}



.terminalHead span {

    float:right;

}




#terminalOutput {

    margin-top:20px;

    line-height:25px;

}




#terminalInput {


    width:100%;

    background:black;

    border:none;

    color:white;

    outline:none;

    font-family:monospace;

    font-size:18px;

}





/* ARCHIVE */


#archive {


    display:none;


    position:fixed;


    inset:0;


    background:#000;


    z-index:9000;


    justify-content:center;


    align-items:center;


    text-align:center;


    font-size:60px;


    animation:broken .15s infinite;


}







/* VOID */


#void {


    display:none;


    position:fixed;


    inset:0;


    background:white;


    color:black;


    z-index:10000;


    justify-content:center;


    align-items:center;


    text-align:center;


    font-size:80px;


    font-weight:bold;


}







/* RANDOM EVENTS */


#event {


    display:none;


    position:fixed;


    inset:0;


    background:black;


    color:white;


    z-index:11000;


    justify-content:center;


    align-items:center;


    font-size:70px;


}







.flash {

    animation:flash .1s;

}



@keyframes flash {


    from {

        background:white;

    }


    to {

        background:black;

    }

}






@keyframes flicker {


    0%,20%,40%,100% {

        opacity:1;

    }


    30% {

        opacity:.2;

    }

}






@keyframes broken {


    0% {

        transform:translate(0);

    }


    50% {

        transform:translate(15px,-5px);

    }


    100% {

        transform:translate(-10px,5px);

    }

}
