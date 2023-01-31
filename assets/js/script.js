//Set up the API key
var APIKey = "8a0b8a21179a203dc24ac4d2fef35efa";
var city = "...";
var searchResults = [];
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
// shows the dates
let forecastDateOne = new Date();
forecastDateOne.setDate(forecastDateOne.getDate() + 1);

let forecastDateTwo = new Date();
forecastDateTwo.setDate(forecastDateTwo.getDate() + 2);

let forecastDateThree = new Date();
forecastDateThree.setDate(forecastDateThree.getDate() + 3);

let forecastDateFour = new Date();
forecastDateFour.setDate(forecastDateFour.getDate() + 4);

let forecastDateFive = new Date();
forecastDateFive.setDate(forecastDateFive.getDate() + 5);

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); // "17-6-2022"

// Here we are building the URL we need to query the database
var queryURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&appid=" +
  APIKey;

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  // Get the submit button
  console.log(response);
  var submitButton = document.getElementById("search-button");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the city name from the input field
    city = document.getElementById("search-input").value;
    // Here we are building the URL we need to query the database
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // Create a new button element
      var newButton = document.createElement("button");
      // Set the text of the button to be the city name
      newButton.innerHTML = response.city.name;
      // Add a class to the button for styling
      newButton.classList.add("list-group-item-button");
      newButton.classList.add("list-group-item");
      // Append the button to the history div
      document.getElementById("history").appendChild(newButton);
      // Save search results to array
      searchResults = response;
      //save searchResults array to localStorage
      // localStorage.setItem("searchResults", JSON.stringify(newButton.innerHTML));
      var currentTemp = (response.list[0].main.temp - 273.15).toFixed(2) + "°C";
      let currentWInd = response.list[0].wind.speed;
      let currentHumidity = response.list[0].main.humidity;
      let currentCityName = response.city.name + " " + currentDate;

      // Five day temp
      let fiveTempOne = (response.list[7].main.temp - 273.15).toFixed(2) + "°C";
      let fiveTempTwo =
        (response.list[15].main.temp - 273.15).toFixed(2) + "°C";
      let fiveTempThree =
        (response.list[23].main.temp - 273.15).toFixed(2) + "°C";
      let fiveTempFour =
        (response.list[31].main.temp - 273.15).toFixed(2) + "°C";
      let fiveTempFive =
        (response.list[39].main.temp - 273.15).toFixed(2) + "°C";

      //five day windspeed
      let fiveWindSpeedOne = response.list[7].wind.speed;
      let fiveWindSpeedTwo = response.list[15].wind.speed;
      let fiveWindSpeedThree = response.list[23].wind.speed;
      let fiveWindSpeedFour = response.list[31].wind.speed;
      let fiveWindSpeedFive = response.list[39].wind.speed;

      // five day humidity

      let fiveHumidityOne = response.list[7].main.humidity;
      let fiveHumidityTwo = response.list[15].main.humidity;
      let fiveHumidityThree = response.list[23].main.humidity;
      let fiveHumidityFour = response.list[31].main.humidity;
      let fiveHumidityFive = response.list[39].main.humidity;

      //weather icons
      var iconCode = searchResults.list[0].weather[0].icon;
      var iconCodeOne = searchResults.list[7].weather[0].icon;
      var iconCodeTwo = searchResults.list[15].weather[0].icon;
      var iconCodeThree = searchResults.list[23].weather[0].icon;
      var iconCodeFour = searchResults.list[31].weather[0].icon;
      var iconCodeFive = searchResults.list[39].weather[0].icon;
      //weather icons
      var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      var iconurlOne =
        "http://openweathermap.org/img/w/" + iconCodeOne + ".png";
      var iconurlTwo =
        "http://openweathermap.org/img/w/" + iconCodeTwo + ".png";
      var iconurlThree =
        "http://openweathermap.org/img/w/" + iconCodeThree + ".png";
      var iconurlFour =
        "http://openweathermap.org/img/w/" + iconCodeFour + ".png";
      var iconurlFive =
        "http://openweathermap.org/img/w/" + iconCodeFive + ".png";
      $("#currentTemp").text(currentTemp);
      $("#currentWindSpeed").text(currentWInd);
      $("#currentHumidity").text(currentHumidity);
      $("#currentCityName").text(currentCityName);

      // 5 day temps
      $("#fiveTempOne").text(fiveTempOne);
      $("#fiveTempTwo").text(fiveTempTwo);
      $("#fiveTempThree").text(fiveTempThree);
      $("#fiveTempFour").text(fiveTempFour);
      $("#fiveTempFive").text(fiveTempFive);

      // 5 day windspeed
      $("#fiveWindSpeedOne").text(fiveWindSpeedOne);
      $("#fiveWindSpeedTwo").text(fiveWindSpeedTwo);
      $("#fiveWindSpeedThree").text(fiveWindSpeedThree);
      $("#fiveWindSpeedFour").text(fiveWindSpeedFour);
      $("#fiveWindSpeedFive").text(fiveWindSpeedFive);

      // 5 day humidity
      $("#fiveHumidityOne").text(fiveHumidityOne);
      $("#fiveHumidityTwo").text(fiveHumidityTwo);
      $("#fiveHumidityThree").text(fiveHumidityThree);
      $("#fiveHumidityFour").text(fiveHumidityFour);
      $("#fiveHumidityFive").text(fiveHumidityFive);

      //weather icons
      $("#wicon").attr("src", iconurl);
      $("#wiconOne").attr("src", iconurlOne);
      $("#wiconTwo").attr("src", iconurlTwo);
      $("#wiconThree").attr("src", iconurlThree);
      $("#wiconFour").attr("src", iconurlFour);
      $("#wiconFive").attr("src", iconurlFive);

      forecastDateOne =
        forecastDateOne.getDate() +
        "-" +
        (forecastDateOne.getMonth() + 1) +
        "-" +
        forecastDateOne.getFullYear();
      forecastDateTwo =
        forecastDateTwo.getDate() +
        "-" +
        (forecastDateTwo.getMonth() + 1) +
        "-" +
        forecastDateTwo.getFullYear();
      forecastDateThree =
        forecastDateThree.getDate() +
        "-" +
        (forecastDateThree.getMonth() + 1) +
        "-" +
        forecastDateThree.getFullYear();
      forecastDateFour =
        forecastDateFour.getDate() +
        "-" +
        (forecastDateFour.getMonth() + 1) +
        "-" +
        forecastDateFour.getFullYear();
      forecastDateFive =
        forecastDateFive.getDate() +
        "-" +
        (forecastDateFive.getMonth() + 1) +
        "-" +
        forecastDateFive.getFullYear();
      //main day weather info
      $("#currentTemp").text(currentTemp);
      $("#currentWindSpeed").text(currentWInd);
      $("#currentHumidity").text(currentHumidity);
      $("#currentCityName").text(currentCityName);
      $("#wicon").attr("src", iconurl);
      // dates work
      $("#forecastDateOne").text(forecastDateOne);
      $("#forecastDateTwo").text(forecastDateTwo);
      $("#forecastDateThree").text(forecastDateThree);
      $("#forecastDateFour").text(forecastDateFour);
      $("#forecastDateFive").text(forecastDateFive);
      
    });
  });
//clear button
  const clearButton = document.getElementById("clear-button");

  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Get all the search history buttons
    const searchHistoryButtons = document.querySelectorAll(
      ".list-group-item-button"
    );
    // Loop through the buttons and remove them one by one  except the clear buttons
    for (let i = 0; i < searchHistoryButtons.length; i++) {
      if (searchHistoryButtons[i] !== clearButton) {
        searchHistoryButtons[i].remove();
      }
    }
  });
});

/// doesn't work! :(
// $(document).ready(function(){
//   $('.list-group-item').click(function(){
//   // Get the city name from the clicked button
//   var city = $(this).text();
//   var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=" + APIKey;
//   // Get the forecast details for the selected city
//     $.ajax({
//       url: queryURL2,
//       method: "GET",
//       success: function(data){
//         // Update the content of the page with the retrieved forecast details
//         $('#currentCityName').text(city);
//         $('#currentTemp').text(data.temp);
//         $('#currentWindSpeed').text(data.windSpeed);
//         $('#currentHumidity').text(data.humidity);

//         // Update the five-day forecast
//         $('#forecastDateOne').text(data.forecast[0].date);
//         $('#fiveTempOne').text(data.forecast[0].temp);
//         $('#fiveWindSpeedOne').text(data.forecast[0].windSpeed);
//         $('#fiveHumidityOne').text(data.forecast[0].humidity);

//         // Continue updating the rest of the forecast data
//       }
//     });
//   });
// });
