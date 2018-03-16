// function run when page opens to populate buttons
$(function () {
    // run createBtn function
    createBtn(searchArray, 'searchButton', '#btn');
    // console.log("page loaded");
})

// create array with my own favorite topics
var searchArray = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
    "bird", "ferret", "turtle", "sugar glider", "chinchilla",
    "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
    "capybara", "teacup pig", "serval", "salamander", "frog"];

// function to dynamically create buttons
function createBtn(searchArray, classAdded, addedArea) {
    // add buttons to designated
    // using .empty() because it would add copies of the buttons
    $(addedArea).empty();

    // loop through searchArray
    for (var i = 0; i < searchArray.length; i++) {
        // adding button element
        var a = $("<button>");
        // add class to button
        a.addClass(classAdded)
        // add attribute(data) through the array
        a.attr('data-type', searchArray[i]);
        // display text for button
        a.text(searchArray[i]);
        // append buttons to addedArea
        $(addedArea).append(a);
    }
}

// click function
$(document).on("click", '.searchButton', function () {
    // storing data-type to call in api
    var type = $(this).data('type');

    // url for api
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=FiF9XbvehQjHflcIQwufYvHFgt1JMsZT&limit=10'
    // api call
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (res) {

        // for loop the object to render
        for (var i = 0; i < res.data.length; i++) {
            // var to create div with class
            var searchDiv = $('<div class=search-item>');
            // var for the rating
            var rating = res.data[i].rating;
            // adding tags for the rating
            var p = $('<p>').text('Rating: ' + rating);
            // var for animate gif
            var animate = res.data[i].images.fixed_height.url;
            // var for still gif
            var still = res.data[i].images.fixed_height_still.url;

            // var for image tag with its attributes
            var image = $('<img>');
            image.attr('src', still);
            image.attr('data-still', still);
            image.attr('data-animate', animate);
            // add string of 'still' (url)
            image.attr('data-still', 'still');
            image.addClass('searchImage');

            // appending to searchDiv
            searchDiv.append(p);
            searchDiv.append(image);

            // rendering onto html
            $('#results').append(searchDiv);

        }
    });
});

// function to animate gifs
$(document).on('click', '.searchImage', function(){
    // storing state as variable
    var state = $(this).attr('data-state');

    // if statement to click to animate or still
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      }
      else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})


// searchbar function
$('addSearch').on('click', function() {
    // grabbing whas in the text box to put in search api
    var newSearch = $('input').eq(0).val();
    // adding into search array
    searchArray.push(newSearch);
    // repopulated buttons with updated searchArray
    createBtn(searchArray, 'searchButton', '#btn');
    // return false to prevent to reload the page
    return false;
})
