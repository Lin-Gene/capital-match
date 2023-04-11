const color = require("colors");
const clm = require("country-locale-map");
const figlet = require("figlet");



let gameOn = true;



// check if there are inputs
    
} else {

}


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

// check if country provided can be found in the database
function validCountry (country) {
}

// function to check that the country and capital passed match each other
function checkAnswer (country, capital) {
    //console.log(clm.getCountryByName(process.argv[2]).capital);
    if (clm.getCountryByName(process.argv[2]).capital === process.argv[3]) {
        console.log ("Correct!!!");
    }
}

// function to generate a random country suggestion for the next game
function generateSuggestion() {

}












