// Assignment Code
var lowercaseCharacters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// var i=["How many characters would you like between 8 and 12?","Do you want Upper Case letters?","Do you want Lower Case letters?","Do you want Numerals?","Do you want Special Characters?"]

var tempUpCase = [];
var tempLowCase = [];
var tempNumChar = [];
var tempSpecChar = [];
var passwordLength;
var generateBtn = document.querySelector("#generate");
function generatePassword () {
var response=prompt("How many characters would you like between 8 and 12?") 
  if (response < 8) {
    response=alert("Not a valid response"); }
      else if (response > 12 && response <=128) {
        response=alert("Not a valid response"); }
        else {
          passwordLength=response;
        }
var responseUpCase=prompt("Do you want Upper Case letters?") 
  if (responseUpCase = "y") {
    tempUpCase.push(uppercaseCharacters);
  } else {
    responseUpCase=false;
  }
var responseLowCase=prompt("Do you want Lower Case letters?")
  if (responseLowCase = "y") {
    tempLowCase.push(lowercaseCharacters);
    } else {
    responseLowCase=false;
  }
  var responseNumChar=prompt("Do you want Numerals?")
  if (responseNumChar = "y") {
      tempNumChar.push(numbers);
    } else {
      responseNumChar=false;
    }
    var responseSpecChar=prompt("Do you want Special Characters?")
  if (responseSpecChar = "y") {
      tempSpecChar.push(specialCharacters);
    } else {
      responseSpecChar=false;}
  var totalResponse=(responsetempUpCase + responsetempLowCase + responsetempNumChar + responsetempSpecChar) 
  if (totalResponse === false) {
      alert("not enought information. A password can not be generated");
    }
}

arr=[tempUpCase, tempLowCase, tempNumChar, tempSpecChar];
console.log (arr);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

