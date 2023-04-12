const color = require("colors");
const countryLocale = require("country-locale-map");
const figlet = require("figlet");



// controls the flow of the game
// first check that inputs are valid
if (!validateInputs(process.argv)) {  
    return;
// if inputs are valid, check if country and capital passed in as arguments actually match
} else {
    const country = process.argv[2];
    const capital = process.argv[3];

    if (countryLocale.getCountryByName(country).capital === capital) {
        figletPrint("Correct !")
        console.log("___________________________________________\n".gray);
        console.log(`Congrats! ${capital} is indeed the capital of ${country}!`.green);
        generateSuggestion();
    } else {
        figletPrint("Try Again")
        console.log("___________________________________________\n".gray);
        console.log(`Whoops! ${capital} is not the capital of ${country}!`.red);
    }
}



// helper function to generate big text with figlet
function figletPrint(text) {
    figlet(text, function (err, data) {
        if (err) {
          console.log("error with figlet output");
          console.dir(err);
          return;
        }
        console.log(data);
    });
}

// helper function to check that the correct number of inputs were passed in, and if country provided can be found in the database
function validateInputs (arguments) {
    if (arguments.length != 4) {  
        figletPrint("Error !");
        console.log("___________________________________________\n".gray);
        console.log("Please provide a country name followed by its capital name when executing this file.".red);
        console.log("Expected format: node capitalMatch.js country capital".red);
        return false;
    }
    if (!countryLocale.getCountryByName(arguments[2], false)) {
        figletPrint("Invalid Input");
        console.log("___________________________________________\n".gray);
        console.log(`There are no records for ${arguments[2]}. Please provide a different country.`.red);
        return false;
    } 
    return true;
}


// function to generate a random country suggestion for the next game
function generateSuggestion() {

    const numCountries = countryLocale.getAllCountries().length;
    const randNum = Math.floor(Math.random() * numCountries + 1);

    const suggestedCountry = countryLocale.getAllCountries()[randNum].name;
    console.log(`Suggested next challenge: ${suggestedCountry}`.green);

}












