$(document).on("click", function(){
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
}).done(function(response){
    
    var giphyDiv = $("<div class='giph'>");
    

});

}

      // Function for displaying giphy data
      function renderButtons() {
        
                // Deleting the movies prior to adding new movies
                // (this is necessary otherwise you will have repeat buttons)
                $("#buttons-view").empty();
        
                // Looping through the array of movies
                for (var i = 0; i < movies.length; i++) {
        
                  // Then dynamicaly generating buttons for each movie in the array
                  // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
                  var a = $("<button>");
                  // Adding a class of movie to our button
                  a.addClass("movie");
                  // Adding a data-attribute
                  a.attr("data-name", movies[i]);
                  // Providing the initial button text
                  a.text(movies[i]);
                  // Adding the button to the buttons-view div
                  $("#buttons-view").append(a);
                }
              }

})


