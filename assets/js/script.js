
//Set up the API key


var APIKey = "8a0b8a21179a203dc24ac4d2fef35efa";
var city = "london"
// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  
    // Create CODE HERE to Log the queryURL
    console.log(queryURL + APIKey)
    // Create CODE HERE to log the resulting object
    console.log(response)
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
  
// Get the submit button
var submitButton = document.getElementById("search-button");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    // Get the city name from the input field
    city = document.getElementById("search-input").value;
    // Create a new button element
    var newButton = document.createElement("button");
    // Set the text of the button to be the city name
    newButton.innerHTML = city;
    // Add a class to the button for styling
    newButton.classList.add("list-group-item");
    // Append the button to the history div
    document.getElementById("history").appendChild(newButton);
  });
  

  }); 
  