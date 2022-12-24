// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var specialCharacters = '!@#$%^&*()_+=';

// function to return a random string of certain characters
function generatePassword() {
  // setting vars to be empty strings
  var password = ''
  var tempPw = ''

  // promp user for how many characters they want between 8 and 128 total characters
  var pwLength = prompt('Between 8 and 128, how many characters would you like your password to be?')
  // using a while loop to set the length of the password
  while (pwLength < 8 || pwLength > 128) {
    alert('Password must be between 8 and 128 characters only')
    pwLength = prompt('Between 8 and 128, how many characters would you like your password to be?')
  }
  // creating a variable to confirm wheather to include and answer each prompt
  var wantsUppercase = confirm('Would you like uppercase letters?')
  if (wantsUppercase) {
    tempPw += uppercaseLetters;
  }
  // creating a variable to confirm wheather to include and answer each prompt
  var wantsLowercase = confirm('Would you like lowercase letters?')
  if (wantsLowercase) {
    tempPw += lowercaseLetters;
  }
  // creating a variable to confirm wheather to include and answer each prompt
  var wantsNumbers = confirm('Would you like numbers?')
  if (wantsNumbers) {
    tempPw += numbers;
  }
  // creating a variable to confirm wheather to include and answer each prompt
  var wantsSpecialCharacters = confirm('Would you like specialCharacters')
  if (wantsSpecialCharacters) {
    tempPw += specialCharacters;
  }
  // using a while loop if criteria to include in the password is not met then generate an alert
  while (!wantsUppercase && !wantsLowercase && !wantsNumbers && !wantsSpecialCharacters) {
    alert('You have to choose atleast one character type')

    wantsUppercase = confirm('Would you like uppercase letters?')
    if (wantsUppercase) {
      tempPw += uppercaseLetters;
    }

    wantsLowercase = confirm('Would you like lowercase letters?')
    if (wantsLowercase) {
      tempPw += lowercaseLetters;
    }

    wantsNumbers = confirm('Would you like numbers?')
    if (wantsNumbers) {
      tempPw += numbers;
    }

    wantsSpecialCharacters = confirm('Would you like specialCharacters')
    if (wantsSpecialCharacters) {
      tempPw += specialCharacters;
    }
  }
  //  using a for loop to iterate over password length and generate a password using methods
  for (var i = 0; i < pwLength; i++) {
    password += tempPw.charAt(Math.floor(Math.random() * tempPw.length))
  }
  // 
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
