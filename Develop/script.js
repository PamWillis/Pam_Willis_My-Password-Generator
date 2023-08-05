// Assignment Code
var lowercaseCharacters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var num =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// var i=["How many characters would you like between 8 and 12?","Do you want Upper Case letters?","Do you want Lower Case letters?","Do you want Numerals?","Do you want Special Characters?"]
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  var response=prompt("How many characters would you like between 8 and 12?") 

  if (response < 8) {
    response=prompt("Not a valid response"); }
      else if (response > 12 && response <=128) {
        response=prompt("Not a valid response"); }
        else {
          response=NumofChar;
      }
}
function generatePassword () {
  var response=prompt("Do you want to use uppercase characters, y or n");

  if (response = n) {
    response=null;
  } else {
    response=useUpperCaseChar;
  }
}
function generatePassword () {
  var response=prompt("Do you want to use lowercase characters, y or n");

  if (response = n) {
    response=null;
  } else {
    response=useLowerCaseChar;
  }
}
function generatePassword () {
  var response=prompt("Do you want to use numerical characters, y or n");

  if (response = n) {
    response=null;
  } else {
    response=useNumberChar;
  }
}
function generatePassword () {
  var response=prompt("Do you want to use special characters, y or n");

  if (response = n) {
    response=null;
  } else {
    response=useSpecialChar;
  }
}





// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


