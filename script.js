// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function that generates the password based on user input
function generatePassword() {

  //Strings of all of the different types of characters. If the user wants a certain type of characters in the password, that character type string is concatenated with charTypes in lines 30-59.
  var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "1234567890";
  var charTypes = "";

  //Prompt that asks the user to enter a number between 8 and 128. While loop guarantees that a number between 8 and 128 is entered.
  var passwordLength = prompt("Please enter a number between 8 and 128. This will be the length of your password.");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("That number is out of range. Please enter a number between 8 and 128.")
  }

  //Section of code for the selection of character types. While loop on line 29 checks to make sure that at least one character type is selected before password generation.
  while (charTypes.length == 0) {

    //Confirm prompt for special characters
    var specialCharBool = confirm("Please click OK if you would like your password to contain special characters. Click Cancel if you do not.");
    if (specialCharBool == true) {
      charTypes += specialChar;
    }

    //Confirm prompt for uppercase characters
    var uppercaseCharBool = confirm("Please click OK if you would like your password to contain uppercase characters. Click Cancel if you do not.");
    if (uppercaseCharBool == true) {
      charTypes += uppercaseChar;
    }

    //Confirm prompt for lowercase characters
    var lowercaseCharBool = confirm("Please click OK if you would like your password to contain lowercase characters. Click Cancel if you do not.");
    if (lowercaseCharBool == true) {
      charTypes += lowercaseChar;
    }

    //Confirm prompt for numeric characters
    var numericCharBool = confirm("Please click OK if you would like your password to contain numeric characters. Click Cancel if you do not.");
    if (numericCharBool == true) {
      charTypes += numericChar;
    }

    //Check to make sure that at least one type of characters was selected and concatenated to charTypes. If not, an alert window is created asking the user to select at least one character type.
    if (charTypes.length == 0) {
      alert("You must select at least one type of characters. You will be prompted to select character types again.");
    }
  }

  //Characters are randomly selected from the user selected character types and concatenated onto the return string, passwordReturn.
  var passwordReturn = "";
  for (i = 0; i < passwordLength; i++) {
    passwordReturn += charTypes[Math.floor(Math.random() * charTypes.length)];
  }

  //The password is returned as a string
  return passwordReturn;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
