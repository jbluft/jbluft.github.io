$( document ).ready(function() {

var animals = ['horse', 'cat', 'dog', 'fish', 'porgs', 'duck'];
createButtons();


//Adding a click event listener for all elements with the class "animalType"
$(document).on("click", ".animalType", displayAnimalInfo);

//will create on click events for the newly created buttons
function displayAnimalInfo() {
    $("#animalGifs").empty();

	var animal = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=sqOj9Wv20vkeeyWjpozosrTg2CJxdXWI&limit=10";

    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
      })

    .done(function(response) {
 
    var results = response.data;
      console.log(response.data);

    for (i = 0; i < results.length; i++) {

    	if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
    	// Creating a div to hold the new set of gifs
		var animalDiv = $("<div class='animalGifs'>");

     	// Storing the rating data
    	var rating = results[i].rating;
	
		// Creating an element to have the rating displayed
    	var showRating = $("<p>").text("Rating: " + rating);

		// Displaying the rating
    	animalDiv.append(showRating);

    	//create an image tag
    	var animalImages = $("<img>");
		// Retrieving the URL for the image and setting up for pausing and unpausing the gifs
		animalImages.attr("src", results[i].images.fixed_height_still.url);
		animalImages.attr("data-still", results[i].images.fixed_height_still.url);
		animalImages.attr("data-animate", results[i].images.fixed_height.url);
		animalImages.addClass('gif');

		// Appending the image
    	animalDiv.append(animalImages);
    
	// writing the gifs to the DOM
    $("#animalGifs").append(animalDiv);
    $(document).on("click", ".gif", pauseGifs);
	}
	}
    });
};

//function for pausing and unpausing gifs
function pauseGifs() {

    $(".gif").on("click", function() {
      // Get the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update to animate
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
}

// Function for displaying animals buttons
function createButtons() {

	// Deleting the animals prior to adding new animals buttons
	$("#showButtons").empty();

	// Looping through the array of animals
	for (var i = 0; i < animals.length; i++) {

	// Let's make some buttons
    var b = $("<button>");
    // Add class to button
    b.addClass("animalType");
    // Adding a data-attribute
    b.attr("data-name", animals[i]);
    // Providing the initial button text
	b.text(animals[i]);
	//Writing the buttons to the DOM
	$("#showButtons").append(b);
    }
};

// Capture user entry on Submit Click
$("#add-animal").on("click", function(event) {

	// prevent form from trying to submit/refresh the page
	event.preventDefault();

	// Capture User Inputs and store them into my animals array
	var name = $("#animal-input").val().trim();
	//push the user values into the array
	animals.push(name);

	//run the function to make the buttons
	createButtons();

	//clear the entry field after submission	
	$("#animal-input").val('');

});
})