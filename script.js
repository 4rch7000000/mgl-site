const terminal = document.getElementById("terminal");
const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");


document.addEventListener("keydown", function(e){

    if(e.key === "t" || e.key === "T"){

        terminal.style.display = "block";
        input.focus();

    }


    if(e.key === "Control"){

        terminal.style.display = "none";

    }

});



input.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        let command = input.value;

        output.innerHTML += "<br>" + command;


        if(command === ">help"){

            output.innerHTML += `

<br>
MGL UNRELEASED:
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


        if(command === ">void"){

            output.innerHTML += `

<br>
THEY ARE DEAD.
<br>
THERE ARE GONE.

`;

        }


        input.value = "";

    }

});
