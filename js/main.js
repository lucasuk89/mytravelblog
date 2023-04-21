
// Values ​​of the corresponding HTML pages in an object
//About the variable countries: Contains the names of  countries as keys and the URLs of their corresponding HTML pages as values.
const countries = {
  iceland: "iceland.html",
  england: "england.html",
  ireland: "ireland.html",
  spain: "spain.html",
  scotland: "scotland.html",
  wales: "wales.html"
};

/*  I made this function to redirects to the selected corresponding HTML country page in an object.
The code then defines a function named redirectToCountry(), which retrieves the value of an input field with the id "country-input",
 converts it to lowercase, and checks if it matches any of the keys in the countries object above.

 If an user write the same country that i created in my object list, a match is found, the function retrieves the corresponding value (i.e., URL)
 from the countries object and sets the current window's location to that URL, effectively 
 redirecting the user to the selected country's HTML page.

 Also, i created the eventListener to a TravelButton(id) and when the button is clicked, it calls the function.
 If the input value does not match any of the keys in the countries object,
the function displays an alert message asking the user to enter a valid country name.
*/
function redirectToCountry() {
  const input = document.getElementById("country-input");
  const country = input.value.toLowerCase();

  if (country in countries) {
    const page = countries[country];
    window.location.href = page;
  } else {
    alert("Write one of the countries I've visited to find out more!");
  }
}
// event listener to the Travel button
const travelButton = document.getElementById("travel-button");
travelButton.addEventListener("click", redirectToCountry);






// TRAVEL TO A SPECIFIC COUNTRY CLICKIN ON THE BLUE BUTTON

/*I made this object named countryIdentification, which contains four keys 
(i.e., specificCountryOne, specificCountryTwo, specificCountryThree, and specificCountryFour) 
with their corresponding HTML page URLs as values. In this way the user can navigate for the specific country that i putted on the cards.

After that i made differents (id's) for each country.
Using also the EventListener to catch the click button, which redirects the user to the corresponding URL for that country by setting the current window's location
to that URL using the window.location.href property.
*/
const countryIdentification = {
  specificCountryOne: "iceland.html",
  specificCountryTwo: "england.html",
  specificCountryThree: "spain.html",
  specificCountryFour: "scotland.html",
};

const chooseCountryOne = document.getElementById("specificCountryOne");
const chooseCountryTwo = document.getElementById("specificCountryTwo");
const chooseCountryThree = document.getElementById("specificCountryThree");
const chooseCountryFour = document.getElementById("specificCountryFour");

chooseCountryOne.addEventListener("click", function () {
  window.location.href = countryIdentification.specificCountryOne;
});

chooseCountryTwo.addEventListener("click", function () {
  window.location.href = countryIdentification.specificCountryTwo;
});

chooseCountryThree.addEventListener("click", function () {
  window.location.href = countryIdentification.specificCountryThree;
});

chooseCountryFour.addEventListener("click", function () {
  window.location.href = countryIdentification.specificCountryFour;
});



