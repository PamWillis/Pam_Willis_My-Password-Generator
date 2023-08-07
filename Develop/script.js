// Assignment Code
var lowercaseCharacters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var possibleCharacters =[];
var passwordLength =[];
var noResponseCount = 0;

var generateBtn = document.querySelector("#generate");
function generatePassword () {
var response=prompt("How many characters would you like between 8 and 128?") 
  if (response < 8 || response > 128) {
    response=alert("Not a valid response");
    return null; }
        else {
          passwordLength.push(response);
        }
var responseUpCase=prompt("Do you want Upper Case letters?") 
  if (responseUpCase === "y") {
    possibleCharacters.push(uppercaseCharacters);
    } else {
      noResponseCount++;
  }
var responseLowCase=prompt("Do you want Lower Case letters?")
  if (responseLowCase === "y") {
    possibleCharacters.push(lowercaseCharacters);
    } else {
      noResponseCount++;
  }
var responseNumChar=prompt("Do you want Numerals?")
  if (responseNumChar === "y") {
    possibleCharacters.push(numbers);
    } else {
      noResponseCount++;
  }
var responseSpecChar=prompt("Do you want Special Characters?")
  if (responseSpecChar === "y") {
    possibleCharacters.push(specialCharacters);
    } else {
      noResponseCount++;
  }
  if (noResponseCount===4) {
      alert("not enough information. A password can not be generated"); 
  } else  {
      console.log("proceed");
  }

possibleCharacters = possibleCharacters.flat();
console.log(possibleCharacters);
console.log(passwordLength);
}


var password =[];

// number of values
let total = possibleCharacters.length;

for (i=0; i < passwordLength; i++)
{ 
  return Math.floor(Math.random() * total);
  possibleCharacters.push(password); }

console.log(password);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

