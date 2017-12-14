$( document ).ready(function() {

//gonna state some vars here

var questions = [
{
	question: "How many home runs did Babe Ruth hit?",
	answer: ["700", "701", "705", "714"],
	correct: '3',
},

{
	question: "How many home runs did Ted Williams hit?",
  answer: ["521", "701", "705", "714"],
	correct: '0',
},
{
	question: "How many home runs did Mickey Mantle hit?",
  answer: ["700", "536", "705", "714"],
	correct: '1',
},

{
	question: "How many home runs did Willie Mays hit?",
  answer: ["700", "701", "660", "714"],
	correct: '3',
}
];
var number = 30;
var intervalID;
var correctAnswer = 0;
var incorrectAnswer = 0;
var question = 0;
var right;
var wrong;


//need to load game with on-click of the Start button

$(".btn").click(function() {
	$("#start").html("");
	run();
	displayQuestions();
$("#submit").addClass("btn btn-primary submit").text("Submit");
    });

//questions and the choices start here
function displayQuestions() {

//gonna try the code Howard showed us before class Tuesday
for (i = 0; i < questions.length; i++) {

//this is a snippet from what Andrew posted on slack to help me out. I'm not entirely sure why but this '+ i' is what keeps the radio buttons acting separately from each other from row to row 

  var newElement = $('<form />', {
    name: 'answer' + i,
  });
  //output HTML here
  newElement.append('<h1>' + questions[i].question + '</h1>')
  newElement.append('<input type=radio value=' + questions[i].answer[0] + '>' + questions[i].answer[0]);
  newElement.append('<input type=radio value=' + questions[i].answer[1] + '>' + questions[i].answer[1]);
  newElement.append('<input type=radio value=' + questions[i].answer[2] + '>' + questions[i].answer[2]);
  newElement.append('<input type=radio value=' + questions[i].answer[3] + '>' + questions[i].answer[3]);
  $("#showQuestions").append(newElement);

}
};

//will try to check the answers here

$("#submit").click(function() {

  var formVals = $('form').serializeArray();
  console.log(formVals);
  
/*  for (i = 0; i < questions.length; i++) {
    if (formVals[i].value == questions[i].correct) {
      right++;
    }
    else {
      wrong++
    }
  }*/
});



/*I'm gonna take the code from the interval activity we did in class to set up the timer*/
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