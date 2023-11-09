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


var lowerCasePositive;
var upperCasePositive;
var numericalPositive;
var symbolPositive;

//Acceptance Criteria
//display password criteria for user to select after initial click
//user inputs criteria for password such as characters used and length
//once each criteria is selected a password will generate and displayed to page

var passwordLength = prompt ("Please input the length you would like your password to be!");
if (passwordLength > 0 && passwordLength < 128) {
  console.log(passwordLength);

  for(x = 0; x < passwordLength; x++){
  var gen = Math.floor(Math.random()*(lowerCase.length));
  password += lowerCase.charAt(gen);
  }

}else[
  alert("Invalid range. Please choose a password length between 8 and 128!")
]

// alert("Would you like lowercase letters?")
// alert("Would you like uppercase letters?")
// alert("Would you like numbers?")
// alert("Would you like symbols?")




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
