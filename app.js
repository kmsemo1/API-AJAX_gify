$(document).ready(function() {

// create array with my own favorite topics
var topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
"bird", "ferret", "turtle", "sugar glider", "chinchilla",
"hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
"capybara", "teacup pig", "serval", "salamander", "frog"];

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
        a.addClass("giphyClass");
        // Adding a data-attribute
        a.attr("data-name", topics[i]);
        // Providing the initial button text
        a.text(topics[i]);
        // Adding the button to the buttons-view div
        $("#btn").append(a);
    }
}

// // function to display gify
// function displayGify() {
//     // grabbing text from user input
//     var giphy = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=FiF9XbvehQjHflcIQwufYvHFgt1JMsZT";

//     // create ajax call
//     $.ajax({
//         url: queryURL,
//         method: 'GET'

//     }).done(function (response) {
//         console.log(response);
//         var res = response.data;
//         // creating a div to hold to giphy
//         for (var i = 0; i < res.length; i++) {
//             var giphyDiv = $("<div class='giphy'>");
//             // storing the giphy data
//             var gif = response.data[i].url;
//             // creating a div to display the giphy
//             var p = $("<img class='play'>").attr("src", gif)
//             // displaying the giphy
//             giphyDiv.append(p);
//             // append giphy
//             $("#giphy").append(p);
//         }
//     })
// };




// // Calling renderButtons which handles the processing of our movie array

// renderButtons();
// $(document).on("click", ".giphyClass", displayGify);

// // This function handles events where a movie button is clicked
// $("#btn").on("click", function (event) {
//     event.preventDefault();
//     // This line grabs the input from the textbox
//     var giphy = $("#giphy-input").val();

//     // Adding movie from the textbox to our array
//     topics.push(giphy);



// });

// // =============== pause and animate code below ========

// $(".play").on("click", function () {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//     } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//     }
// });

// });
