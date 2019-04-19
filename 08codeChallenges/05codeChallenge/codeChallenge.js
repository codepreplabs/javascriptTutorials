/*

1. Build a function constructor called question to describe a question.
A question should include:

1. the question itself
2. the answers from which the player can choose the correct one 
3. correct answer

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, with the possible answers

5. Use the 'prompt' function to ask the user for the correct answer. 

6. Validate the user input and print the correct answer.

7. Make sure that your code is private and does not interfere with other programmers code.

8. After displaying the result display the next random question.

9. Include an exit condition to quit the game.

10. Track the users score.

11. display the score in the console.

*/


(function(){
    
var Question = function (question, possibleAnswers, correctAnswers){
    
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswers = correctAnswers;
}

var question1 = new Question('What is the capital of America?',['Washington', 'Texas'], 0);
var question2 = new Question('What is the capital of India?',['Bangalore', 'New Delhi'], 1);
var question3 = new Question('What is the capital of China?',['Bejing', 'Shangai'], 0);

var questions = new Array(question1, question2, question3);
    
Question.prototype.displayQuestion = function() {
    
    console.log(this.question);
    
    var options = this.possibleAnswers;
    for(var i = 0; i < options.length; i++){
        console.log(i+ ' :' + options[i]);
    }
}

Question.prototype.displayScore = function(score){
    
    console.log('Your curent score is: '+ score);
    console.log('------------------------------');
}

function score (){
    
    var sc = 0;
    return function(correct){
        
        if(correct){
           sc++;
        }
        return sc;
    }
}
    
var keepScore = score();

Question.prototype.checkAnswer = function (choice, callback){
    
    var sc;
    
    if(choice === this.correctAnswers){
       console.log('correct answer!');
        sc = callback(true);
    }
    else {
        console.log('wrong answer! try Again!');
        sc = callback(false);
    }
    this.displayScore(sc);
}

    
var nextQuestion = function (){
        
    var no = Math.floor(Math.random() * 2) + 1;
    var question = questions[no];
    question.displayQuestion();
    var choice = prompt("Enter the answere here:");
    
    if(choice !== "exit"){
        question.checkAnswer(parseInt(choice), keepScore);
        nextQuestion();
       }
    else{
        console.log(choice);
    }
}

    nextQuestion();

})();