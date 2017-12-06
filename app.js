// create array with my own favorite topics
var topics = ["Kanye West", "Cam'ron", "Nas", "Jay Z"];

// function to display gify
function displayGify() {
    // grabbing text from user input
    var giphy = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=FiF9XbvehQjHflcIQwufYvHFgt1JMsZT&limit=5";

console.log(topics)

}