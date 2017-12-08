// create array with my own favorite topics
var topics = ["Kanye West", "Cam'ron", "Nas", "Jay Z"];

// function to display gify
function displayGify() {
    // grabbing text from user input
    var giphy = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=FiF9XbvehQjHflcIQwufYvHFgt1JMsZT";

    // create ajax call
    $.ajax({
        url: queryURL,
        method: 'GET'

    }).done(function (response) {
        console.log(response);

        var giphDiv = $("<div class='giphy'>");
         
        var gif = response.data[i]
        
        var p = $("<p>").text(gif);

        $("#giphy").append(p);

    });


displayGify();

// Function for displaying giphy data
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#btn").empty();
    
    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("movie");
        // Adding a data-attribute
        a.attr("data-name", topics[i]);
        // Providing the initial button text
        a.text(topics[i]);
        // Adding the button to the buttons-view div
        $("#btn").append(a);
    }
}

// This function handles events where a movie button is clicked
$("#add-movie").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var movie = $("#movie-input").val().trim();

    // Adding movie from the textbox to our array
    movies.push(movie);
)};

    // Calling renderButtons which handles the processing of our movie array
    renderButtons(); 


// =============== pause and animate code below ========

    // $(".gif").on("click", function() {
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-state");
    //     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === "still") {
    //       $(this).attr("src", $(this).attr("data-animate"));
    //       $(this).attr("data-state", "animate");
    //     } else {
    //       $(this).attr("src", $(this).attr("data-still"));
    //       $(this).attr("data-state", "still");
    //     }
    //   });

