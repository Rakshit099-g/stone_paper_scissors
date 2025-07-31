let you = 0;
let computer = 0;
let userScore = document.querySelector("#user-score") 
let computerScore = document.querySelector("#comp-score") 
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let reset = document.querySelector("#reset")
const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        you++;
        msg.innerText=`You Win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
        userScore.innerText=you;

    }
    else{
        computer++;
        msg.innerText=`You lose,Try Again! ${computerChoice} beats your${userChoice}`;
         msg.style.backgroundColor="red";
         computerScore.innerText=computer;
    }
};
const genCompChoice = ()=>{
 const options = ["rock","paper","scissor"];
 const randIdx = Math.floor(Math.random()*3);
 return options[randIdx];
};
const playGame= (userchoice)=>{
    console.log(userchoice);
    const computerChoice = genCompChoice(); 
    console.log(computerChoice)
    if(userchoice===computerChoice){
        msg.innerText="Game was Draw.Play Again";
         msg.style.backgroundColor="#081b31";
    }
    else{
        let userWin = true;
        if(userchoice==="rock"){
           userWin= computerChoice==="paper"?false:true; 
        }
        else if(userchoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,computerChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
reset.addEventListener("click",()=>{
    you = 0;
    computer=0;
    userScore.innerText=you;
    computerScore.innerText=computer;
    msg.innerText="Play your move";
    msg.style.backgroundColor="#081b31"

});