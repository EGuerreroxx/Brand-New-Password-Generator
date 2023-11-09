// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE

//Initializers
var password = '';
var potentialChars = '';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLNOPQRSTUVWYXYZ';
var symbols = '!@#$%^&*()+_';
var numbers = '1234567890';


var hasLowerCase = true;
var hasUpperCase = true;
var hasNumbers = true;
var hasSymbols = true;

//Acceptance Criteria
//display password criteria for user to select after initial click
//user inputs criteria for password such as characters used and length
//once each criteria is selected a password will generate and displayed to page


if(!(hasLowerCase && hasUpperCase && hasNumbers && hasSymbols)==0){
  alert("Please choose at least one char type to include in your password!");
  return;
}

if(!hasLowerCase){
  var potentialChars = upperCase + numbers + symbols;

}else if(!hasUpperCase){
  var potentialChars = lowerCase + numbers + symbols;

}else if(!hasNumbers){
  var potentialChars = lowerCase + upperCase + symbols;

}else if(!hasSymbols){
  var potentialChars = lowerCase + + upperCase + numbers;

}
//User is prompted for length and if statement is created to satisfy 8-128 chars
var passwordLength = prompt ("Please input the length you would like your password to be!");
if (passwordLength >= 8 && passwordLength <= 128) {
  for(x = 0; x < passwordLength; x++){
  var gen = Math.floor(Math.random()*(potentialChars.length));
  password += potentialChars.charAt(gen);
  }

}else[
  alert("Invalid range. Please choose a password length between 8 and 128!")
]

// prompt("Would you like lowercase letters?")
// prompt("Would you like uppercase letters?")
// prompt("Would you like numbers?")
// prompt("Would you like symbols?")




return password;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
