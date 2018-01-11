$(document).ready(function(){

/* global firebase moment */
// Steps to complete:

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyDgoT2jal1tCGtGHMmPEaeAQhusfYNjG_c",
    authDomain: "hogwartsexpress-cda6a.firebaseapp.com",
    databaseURL: "https://hogwartsexpress-cda6a.firebaseio.com",
    projectId: "hogwartsexpress-cda6a",
    storageBucket: "hogwartsexpress-cda6a.appspot.com",
    messagingSenderId: "381513110943"
  };
  
firebase.initializeApp(config);

var database = firebase.database();


// On Click event to store information from submission form and send to firebase
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var newTrain = $("#trainName-input").val().trim();
  var newDestination = $("#destination-input").val().trim();
  var newDeparture = $("#first-input").val().trim();
  var newFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var addTrain = {
    train: newTrain,
    destination: newDestination,
    departure: newDeparture,
    frequency: newFrequency
  };

  // Uploads train info to the database
  database.ref().push(addTrain);

  // console group log to test
  // console.group('new train schedule')
  // console.log(addTrain.train);
  // console.log(addTrain.destination);
  // console.log(addTrain.departure);
  // console.log(addTrain.frequency);
  // console.groupEnd();

  // Alert
  alert("Nice going muggle you added the train");

  // Clears all of the text-boxes
  $("#trainName-input").val("Hogwarts Express");
  $("#destination-input").val("");
  $("#first-input").val("");
  $("#frequency-input").val("");


});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

/*  console.log("Here's the childsnapshot");
  console.log(childSnapshot.val());*/

  // Store everything into a variable.
  var newTrainA = childSnapshot.val().train;
  var newDestinationA = childSnapshot.val().destination;
  var newDepartureA = childSnapshot.val().departure;
  var newFrequencyA = childSnapshot.val().frequency;

  // Console group the new variables binding to the firebase data
/*  console.group("new snapshop vars")
  console.log(newTrainA);
  console.log(newDestinationA);
  console.log(newDepartureA);
  console.log(newFrequencyA);
  console.groupEnd();
*/

// variable for storing frequency user input
    var tFrequency = newFrequencyA;

    // create variable for first time input
    var firstTime = newDepartureA;

    // first time conversion
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");

    // Get the current time
    var currentTime = moment();

    // Calculate the difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;

    // Calculate minutes Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;

    // Calculate the next train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    var nextTrainFinal = moment(nextTrain).format("hh:mm")


// Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + newTrainA + "</td><td>" + "9 3/4" + "</td><td>" + newDestinationA + "</td><td>" +
  newFrequencyA + "</td><td>" + nextTrainFinal + "</td><td>" + tMinutesTillTrain + "</td></tr>");

});

//creating fromnow moment since last dementor attack
var dementorAttack = moment([2018, 0, 01]).fromNow(true); 
console.log(dementorAttack);

//write the dementor attack date to the DOM
$("#dementor").append(dementorAttack);
});