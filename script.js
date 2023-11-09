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

//Acceptance Criteria
//display password criteria for user to select after initial click
//user inputs criteria for password such as characters used and length
//once each criteria is selected a password will generate and displayed to page


//User prompts to determine which characters will be used
var hasLowerCase = prompt("Would you like lowercase letters (Y/N)?");
var hasUpperCase = prompt("Would you like uppercase letters (Y/N)?");
var hasNumbers = prompt("Would you like numbers (Y/N)?");
var hasSymbols = prompt("Would you like symbols (Y/N)?");

//converting user input to UpperCase for if statement validation
var hasLowerCase = hasLowerCase[0].toUpperCase();
var hasUpperCase = hasUpperCase[0].toUpperCase();
var hasNumbers = hasNumbers[0].toUpperCase();
var hasSymbols = hasSymbols[0].toUpperCase();

//All possible character combinations in form of If statements

//If no character input is selected than an alert will pop up telling user to choose at least one character type to include
if(hasLowerCase ==='N' && hasUpperCase ==='N' && hasNumbers ==='N' && hasSymbols ==='N'){
  alert("Please choose at least one char type to include in your password!");
  return;
}

if(hasUpperCase === "N" && hasNumbers === "N" && hasSymbols === "N"){
  var potentialChars = lowerCase;

}else if(hasLowerCase === "N" && hasNumbers === "N" && hasSymbols === "N"){
  var potentialChars = upperCase;

}else if(hasLowerCase === "N" && hasUpperCase === "N" && hasSymbols === "N"){
  var potentialChars = numbers;

}else if (hasLowerCase === "N" && hasUpperCase === "N" && hasNumbers === "N"){
  var potentialChars = symbols;

}else if(hasLowerCase === "N" && hasUpperCase === "N"){
  var potentialChars = numbers + symbols;

}else if(hasLowerCase === "N" && hasNumbers === "N"){
  var potentialChars = upperCase + symbols;

}else if(hasLowerCase === "N" && hasSymbols === "N"){
  var potentialChars = upperCase + numbers;

}else if(hasUpperCase === "N" && hasNumbers === "N"){
  var potentialChars = lowerCase + symbols;

}else if(hasUpperCase === "N" && hasSymbols === "N"){
  var potentialChars = lowerCase + numbers;

}else if(hasNumbers === "N" && hasSymbols === "N"){
  var potentialChars = lowerCase + upperCase;

}else if(hasLowerCase ==="N"){
  var potentialChars = upperCase + numbers + symbols;

}else if(hasUpperCase === "N"){
  var potentialChars = lowerCase + numbers + symbols;

}else if(hasNumbers === "N"){
  var potentialChars = lowerCase + upperCase + symbols;

}else if(hasSymbols === "N"){
  var potentialChars = lowerCase + upperCase + numbers;

}else{
  var potentialChars = lowerCase + upperCase + numbers + symbols;
}

//User is prompted for length and if statement is created to satisfy 8-128 chars
//potentialChars is used here from the previous If statement according to user input to have character picked at random
var passwordLength = prompt ("Please input the length you would like your password to be!");
if (passwordLength >= 8 && passwordLength <= 128) {
  for(x = 0; x < passwordLength; x++){
  var gen = Math.floor(Math.random()*(potentialChars.length));
  password += potentialChars.charAt(gen);
  }

}else{//If User fails to choose an appropriate length an alert box will pop up asking user to choose an appropriate length
  alert("Invalid range. Please choose a password length between 8 and 128!");
}

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
