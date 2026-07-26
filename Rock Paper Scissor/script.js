let compScore = 0;
let userScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = ()=>{
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor((Math.random()*3))
    return option[randIdx];
}

const drawGame = ()=>{
    console.log("Game was Draw")
    msg.innerHTML= "It's a Draw,Try Again";
    msg.style.backgroundColor = "#1F2937";
}

const showWinner = (userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML= userScore;
        console.log("You! Win");
        msg.innerHTML= `You! Win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerHTML= compScore;
        console.log("You Lose");
        msg.innerHTML= `You! Lose ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";

    } 
    
}
const playGame = (userchoice) =>{
    console.log(userchoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log(compChoice);
    if(userchoice===compChoice){
        // draw 
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice==="rock"){
            // scissor , paper
            userWin = (compChoice==="paper")?false:true;
        }
        else if(userchoice==="paper"){
            // scissor , rock
            userWin = (compChoice==="scissor")?false:true;
        }
        else{
            // rock,paper
            userWin= (compChoice==="rock")?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
}


choices.forEach((choice)=>{
    const userchoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        console.log("Choice is Clicked",userchoice);
        playGame(userchoice);
    });

})