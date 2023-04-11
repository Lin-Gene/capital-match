const color = require("colors");
const clm = require("country-locale-map");
const figlet = require("figlet");



let gameOn = true;



// check if there are inputs






console.log(clm.getCountryByName(process.argv[2]).capital);
if (clm.getCountryByName(process.argv[2]).capital === process.argv[3]) {
    console.log ("Correct!!!")
};






