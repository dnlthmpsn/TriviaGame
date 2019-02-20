alert("connected");

//Global Variables
//========================

//array of objects, each object is a trivia question. question, correctResponse, asset to be served on correct/incorrect. question difficulty increasing 
    //answer is always a single option: can be fill in the blank, true, false, or one of multiple options. 

var masterTimer;
    
//DOM element selectors
    //user input: key listeners and submit on enter.



//Functions 
//========================


function keepScore(){
    //correct/inccorect in a scoreboard. animation included. beyond simple..
}

function newGame(){
    //on click begin master timer
    keepScore();    
    nextQuestion();
}


function moveOn(){
     //after set amount of time
    //if user hits next question on the showQuestionResult screen
}

function renderGameResults(){
    //once all questions are responded to:
        // render GameResults screen
            //scoreboard with correct and incorrect
           newGame();
            //option to play again         
}

function showQuestionResult(){
    //render the appropriate content for correct/incorrect response
    moveOn();
}

function nextQuestion(){
     //function timer: they start with 10 seconds, and the next question adds the time remaining from a correct previous responds. 
    //function checkInput: if user input matches correctResponse, render correctAsset, ifNot render correct answer and incorrectAsset
    showQuestionResult();
    renderGameResults();
}


   





//Main Process
//========================

function app(){
    newGame();
}
