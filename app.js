// function run when page opens to populate buttons
$(function(){
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
    for (var i=0; i<searchArray.length; i++) {
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

