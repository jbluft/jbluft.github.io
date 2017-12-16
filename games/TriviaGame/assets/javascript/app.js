$( document ).ready(function() {

//gonna state some vars here

var questions = [

{
  question: "Who is the all-time home run leader?",
  answer: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "Willie Mays"],
  correct: "Barry",
},

{
	question: "How many home runs did Babe Ruth hit?",
	answer: ["700", "701", "705", "714"],
	correct: "714",
},

{
  question: "What National League team has won the most World Series?",
  answer: ["Reds", "Cardinals", "Dodgers", "Giants"],
  correct: "Cardinals",
},

{
	question: "Who is the last player to bat .400 in a full season?",
  answer: ["George Brett", "Ted Williams", "Shoeless Joe Jackson", "Hack Wilson"],
	correct: "Ted",
},
{
	question: "How many home runs did Mickey Mantle hit?",
  answer: ["700", "536", "705", "714"],
	correct: "536",
},

{
  question: "Who was the first player to hit 40 homers and steal 40 bases in one season?",
  answer: ["Alex Rodriguez", "Willie Mays", "Eric Davis", "Jose Canseco"],
  correct: "Jose",
},

{
  question: "Who is the all-time saves leader?",
  answer: ["Lee Smith", "Trevor Hoffman", "Mariano Rivera", "Jeff Reardon"],
  correct: "Mariano",
},

{
  question: "In what year did a players' strike cancel the World Series?",
  answer: ["1994", "1904", "1995", "1981"],
  correct: "1994",
},

{
  question: "Who was the last player to win the batting Triple Crown?",
  answer: ["Barry Bonds", "Miguel Cabrera", "Mickey Mantle", "Babe Ruth"],
  correct: "Miguel",
},


{
	question: "Who is the all-time wins leader?",
  answer: ["Tom Seaver", "Roger Clemens", "Warren Spahn", "Cy Young"],
	correct: "Cy",
}
];
var number = 30;
var intervalID;
var correctAnswer = 0;
var incorrectAnswer = 0;
var question = 0;
var right = 0;
var wrong = 0;


//need to load game with on-click of the Start button

$(".btn").click(function() {
	$("#start").html("");
	run();
	displayQuestions();
$("#submit").addClass("btn btn-primary submit").text("Submit");
    });

//questions and the choices start here
function displayQuestions() {

//for loop to start the questions
for (i = 0; i < questions.length; i++) {

//Posting the questions and answers to the DOM 

  var newElement = $('<div>');
  //output HTML here
  newElement.append('<br />' + '<h1>' + questions[i].question + '</h1>')
  newElement.append('<input type=radio name=radio-' + i + ' value=' + questions[i].answer[0] + '>' + questions[i].answer[0] + '&nbsp;');
  newElement.append('<input type=radio name=radio-' + i + ' value=' + questions[i].answer[1] + '>' + questions[i].answer[1] + '&nbsp;');
  newElement.append('<input type=radio name=radio-' + i + ' value=' + questions[i].answer[2] + '>' + questions[i].answer[2] + '&nbsp;');
  newElement.append('<input type=radio name=radio-' + i + ' value=' + questions[i].answer[3] + '>' + questions[i].answer[3] + '&nbsp;');
  $("#showQuestions").append(newElement);

}
};


$("#submit").click(function() {

  var formVals = $('form').serializeArray();
  console.log(formVals);
  
  for (i = 0; i < questions.length; i++) {
    if (formVals[i].value == questions[i].correct) {
      right++;
    }
    else {
      wrong++
    }
  }
  console.log(right);
  console.log(wrong);
  //time to write to the page
  $("#submit").removeClass("btn btn-primary submit").addClass("styling").html("<br />" + "You got " + right + " correct" + "<br />" + "You got " + wrong + " wrong");

});



/*Interval code goes here*/
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2 class='countdown'>" + number + "</h2>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
      }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
  };

});