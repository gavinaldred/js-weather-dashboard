//Set up the API key
var APIKey = "8a0b8a21179a203dc24ac4d2fef35efa";
var city = "london";
var searchResults = [];

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=" + APIKey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Get the submit button
  console.log(response)
  var submitButton = document.getElementById("search-button");
  submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      // Get the city name from the input field
      city = document.getElementById("search-input").value;
      // Here we are building the URL we need to query the database
      var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=" + APIKey;
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          // Create a new button element
          var newButton = document.createElement("button");
          // Set the text of the button to be the city name
          newButton.innerHTML = response.city.name;
          // Add a class to the button for styling
          newButton.classList.add("list-group-item-button");
          newButton.classList.add("list-group-item");
          // Append the button to the history div
          document.getElementById("history").appendChild(newButton);
          //save search results to array
          searchResults = response;
          //save searchResults array to localStorage
          localStorage.setItem("searchResults", JSON.stringify(searchResults));
          var currentTemp = response.list[0].main.temp;
          let currentWInd = response.list[0].wind.speed;
          let currentHumidity = response.list[0].main.humidity;
          $("#currentTemp").append(currentTemp);
          $("#currentWindSpeed").append(currentWInd);
          $("#currentHumidity").append(currentHumidity)

      });
  });

  // Clear Searches button
var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(event) {
event.preventDefault();
localStorage.removeItem("searchResults");
searchResults = [];
// Select all list items but not the clear results button
$("#history li:not(#clear-button)").remove();
location.reload();
});
  

  //retrieve searchResults from localStorage
  if(localStorage.getItem("searchResults")){
      searchResults = JSON.parse(localStorage.getItem("searchResults"));
      // Iterate over the searchResults array to create buttons for each city
      for (var i = 0; i < searchResults.length; i++) {
          var newButton = document.createElement("button");
          newButton.innerHTML = searchResults[i].city.name;
          newButton.classList.add("list-group-item-button");
          newButton.classList.add("list-group-item");
          document.getElementById("history").appendChild(newButton);
      }
  }
});