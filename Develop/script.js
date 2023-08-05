// Assignment Code
var lowercaseCharacters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var num =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCase= confirm("Do you want to use lower case");
// var i=["How many characters would you like between 8 and 12?","Do you want Upper Case letters?","Do you want Lower Case letters?","Do you want Numerals?","Do you want Special Characters?"]
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  var response=prompt("How many characters would you like between 8 and 12?")
  // if else  check if less than 8 or more then 128  if so send alert for correct amount //
  if (input <= 7 || input >= 13) {
    response = response;
  } else if (input>=8 && input<=12) {
    response = lowerCase;
  }

  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


