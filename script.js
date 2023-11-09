// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE

//Initializers
var password = '';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLNOPQRSTUVWYXYZ';
var symbols = '!@#$%^&*()+_';
var numbers = '1234567890';
var passwordLength = 8;

//Acceptance Criteria
//display password criteria for user to select after initial click
//user inputs criteria for password such as characters used and length
//once each criteria is selected a password will generate and displayed to page


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
