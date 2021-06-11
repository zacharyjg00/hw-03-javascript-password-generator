// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Please enter a number between 8 and 128. This will be the length of your password.");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("That number is out of range. Please enter a number between 8 and 128.")
  }

  var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChar = "1234567890";
  var charTypes = "";

  while (charTypes.length == 0) {
    var specialCharBool = prompt("Please enter true or false if you would like you password to contain special characters.");
    while (specialCharBool.toLowerCase() != "true" && specialCharBool.toLowerCase() != "false") {
      specialCharBool = prompt("You did not input a valid option. Please enter true or false.");
    }
    if (specialCharBool.toLowerCase() == "true") {
      charTypes += specialChar;
    }
  
    var lowercaseCharBool = prompt("Please enter true or false if you would like you password to contain lowercase characters.");
    while (lowercaseCharBool.toLowerCase() != "true" && lowercaseCharBool.toLowerCase() != "false") {
      lowercaseCharBool = prompt("You did not input a valid option. Please enter true or false.");
    }
    if (lowercaseCharBool.toLowerCase() == "true") {
      charTypes += lowercaseChar;
    }
  
    var uppercaseCharBool = prompt("Please enter true or false if you would like you password to contain uppercase characters.");
    while (uppercaseCharBool.toLowerCase() != "true" && uppercaseCharBool.toLowerCase() != "false") {
      uppercaseCharBool = prompt("You did not input a valid option. Please enter true or false.");
    }
    if (uppercaseCharBool.toLowerCase() == "true") {
      charTypes += uppercaseChar;
    }
    
    var numberCharBool = prompt("Please enter true or false if you would like you password to contain number characters.");
    while (numberCharBool.toLowerCase() != "true" && numberCharBool.toLowerCase() != "false") {
      numberCharBool = prompt("You did not input a valid option. Please enter true or false.");
    }
    if (numberCharBool.toLowerCase() == "true") {
      charTypes += numberChar;
    }

    if (charTypes.length == 0) {
      alert("You must select at least one type of characters. You will be prompted to select character types again.");
    }
  }

  var passwordReturn = "";
  for (i = 0; i < passwordLength; i++) {
    passwordReturn += charTypes[Math.floor(Math.random() * charTypes.length)];
  }

  return passwordReturn;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
