// Assignment Code
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var possibleCharacters = [];
// var passwordLength =[];
var noResponseCount = 0;

var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = prompt("How many characters would you like between 8 and 128?")
  console.log(isNaN(passwordLength));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Not a valid response");
    return null;
  }

  var responseUpCase = confirm("Do you want Upper Case letters?")
  console.log(responseUpCase);
  if (responseUpCase) {
    possibleCharacters.push(uppercaseCharacters);
  } else {
    noResponseCount++;
  }
  var responseLowCase = confirm("Do you want Lower Case letters?")
  if (responseLowCase) {
    possibleCharacters.push(lowercaseCharacters);
  } else {
    noResponseCount++;
  }
  var responseNumChar = confirm("Do you want Numerals?")
  if (responseNumChar) {
    possibleCharacters.push(numbers);
  } else {
    noResponseCount++;
  }
  var responseSpecChar = confirm("Do you want Special Characters?")
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
  possibleCharacters = possibleCharacters.flat();
  console.log(possibleCharacters);

  //if responseLowCase is true then it must pe in passwordText
  //if responseUpCase is true then it must pe in passwordText 
  //if responseNumChar is true then it must pe in passwordText 
  //if responseSpecChar is true then it must pe in passwordText 
  //count how many true described by noResponseCount
  //subtract that number from passwordLength
  //remainder can use randomIndex

  //create a for loop for each response that is true, push random value into password
  //subtract noResponseCount from passwordLength, run the rest
  //

  // Write password to the #password input

  var passwordText = [];
  var remainderText = [];


  //first four ifs are to make sure one of each is in password
  if (responseUpCase === true) {
    var randomIndex = Math.floor(Math.random() * uppercaseCharacters.length);
    var value = uppercaseCharacters[randomIndex];
    console.log(value);
    passwordText.push(value);
  }
  if (responseLowCase === true) {
    var randomIndex = Math.floor(Math.random() * lowercaseCharacters.length);
    var value = lowercaseCharacters[randomIndex];
    console.log(value);
    passwordText.push(value);
  }
  if (responseNumChar === true) {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    var value = numbers[randomIndex];
    console.log(value);
    passwordText.push(value);
  }
  if (responseSpecChar === true) {
    var randomIndex = Math.floor(Math.random() * specialCharacters.length);
    var value = specialCharacters[randomIndex];
    console.log(value);
    passwordText.push(value);
  }
  var passwordText = passwordText.join(" ");
  console.log(passwordText);


  //This is to say # that are true minus passwordLength NOT WORKING, cant read passwordLength as a number
  passwordLength = (passwordLength -= noResponseCount);
  console.log(passwordLength);
  //Last one is to put remainder in
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var value = possibleCharacters[randomIndex];
    console.log(value);
    remainderText.push(value);
  }
  var remainderText = remainderText.join(" ");
  console.log(remainderText);
  
  //Joining selections together
  Finalpassword = [[passwordText] + [remainderText]];
  return Finalpassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

