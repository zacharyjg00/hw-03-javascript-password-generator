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
  var numericChar = "1234567890";
  var charTypes = "";

  while (charTypes.length == 0) {
    var specialCharBool = confirm("Please click OK if you would like your password to contain special characters. Click Cancel if you do not.");
    if (specialCharBool == true) {
      charTypes += specialChar;
    }

    var uppercaseCharBool = confirm("Please click OK if you would like your password to contain uppercase characters. Click Cancel if you do not.");
    if (uppercaseCharBool == true) {
      charTypes += uppercaseChar;
    }

    var lowercaseCharBool = confirm("Please click OK if you would like your password to contain lowercase characters. Click Cancel if you do not.");
    if (lowercaseCharBool == true) {
      charTypes += lowercaseChar;
    }

    var numericCharBool = confirm("Please click OK if you would like your password to contain numeric characters. Click Cancel if you do not.");
    if (numericCharBool == true) {
      charTypes += numericChar;
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
