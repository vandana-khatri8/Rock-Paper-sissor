let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice")
const newGamebtn = document.querySelector(".newGame")
// console.log(choices);
const msg = document.querySelector("#msg")
const userScorePera = document.querySelector("#user-score")
const comscorePera = document.querySelector ("#comp-score")
const genCompChoices = () => {
    const options = ["rock","papper","scissor"];
    let randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawGame =()=>{
    // console.log("Game is Draw");
    msg.innerText=" Game Draw";
    msg.style.backgroundColor = " #081b31";
};


const showWinner = (userWin,userChoice,comChoice) =>{
     if(userWin){
    // console.log("you win...");
    userScore++;
    userScorePera.innerText=userScore;
     msg.innerText=`You Win... your ${userChoice} beats ${comChoice}`;
     msg.style.backgroundColor = " green"; }
    else 
    {
    // console.log("you lose...!");
    compScore++;
    comscorePera.innerText=compScore;
    msg.innerText=` You lost ${comChoice} beats your  ${userChoice}`;
    msg.style.backgroundColor = "red";}

};






const playGame = (userChoice) =>{
// console.log(userChoice, "choice user");   
                                            // create no. of  modules for diff works/task is called moduler funvtioning
// generate computer choice
const comChoice = genCompChoices();
// console.log(comChoice, "choice com"); 


if( userChoice === comChoice){
    //draw game

drawGame();
}
else {
    let userWin = true ;
    if(userChoice === "rock"){
        // com === "paper","scissors"
        userWin = comChoice === "paper" ?   false : true
        console.log(userWin);
    }
   else if(userChoice === "papper"){
        // com === "rock","scissors"
        userWin = comChoice === "scissor" ?   false: true ;
    }
    else  if (userChoice === "scissor"){
        // com === "rock","papper"
       userWin = comChoice === "rock" ?   false : true;
  
}  
showWinner(userWin,userChoice,comChoice);
}

};




choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
    //console.log(choice,"the choice");
    const userChoice = choice.getAttribute("id")
    //console.log("clicked", userChoice);
    playGame(userChoice);
});
});

