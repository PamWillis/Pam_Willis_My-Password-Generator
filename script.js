// Assignment Code
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var possibleCharacters = [];
var noResponseCount = 0;

var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = Number(prompt("How many characters would you like between 8 and 128?"));
  console.log(isNaN(passwordLength));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Not a valid response");
    return null;
  }
  var responseUpCase = confirm("Do you want Upper Case letters?");
  if (responseUpCase) {
    possibleCharacters.push(uppercaseCharacters);
  } else {
    noResponseCount++;
  }
  var responseLowCase = confirm("Do you want Lower Case letters?");
  if (responseLowCase) {
    possibleCharacters.push(lowercaseCharacters);
  } else {
    noResponseCount++;
  }
  var responseNumChar = confirm("Do you want Numerals?");
  if (responseNumChar) {
    possibleCharacters.push(numbers);
  } else {
    noResponseCount++;
  }
  var responseSpecChar = confirm("Do you want Special Characters?");
  if (responseSpecChar) {
    possibleCharacters.push(specialCharacters);
  } else {
    noResponseCount++;
  }
  if (noResponseCount === 4) {
    alert("not enough information. A password can not be generated");
    return
  }

  console.log(noResponseCount);
  console.log(possibleCharacters);
  console.log(passwordLength);

  //puts characters in one array
  possibleCharacters = possibleCharacters.flat();

  console.log(possibleCharacters);

  // push random characters into passwordText
  var passwordText = [];

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var value = possibleCharacters[randomIndex];
    console.log(value);
    passwordText.push(value);
  }
  // join
  var passwordText = passwordText.join("");
  return passwordText;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

