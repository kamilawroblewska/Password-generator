// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let multiSelect = []; // missed the empty array
let randomPass = ""; // missed the empty string
// Function to prompt user for password options
function getPasswordOptions() {
  let passLength, specialSymbols, upperABC, lowerABC, numericOptions;
  // Asking for password length
  let isPassLengthInvalid = false;
  do {
    passLength = prompt(
      "How many characters would you like your password to contain? From 8 to 128."
    );
    isPassLengthInvalid =
      passLength < 8 || passLength > 128 || isNaN(passLength);
    if (isPassLengthInvalid) {
      alert("Your password has to be from 8 to 128 characters long");
    }
  } while (isPassLengthInvalid);
  // Asking for password options
  let isConditionMet = false;
  do {
    specialSymbols = confirm(
      "Click OK to confirm including special characters"
    );
    upperABC = confirm("Click OK to confirm including uppercase characters");
    lowerABC = confirm("Click OK to confirm including lowercase characters");
    numericOptions = confirm(
      "Click OK to confirm including numeric characters"
    );
    isConditionMet = specialSymbols || upperABC || lowerABC || numericOptions;
    console.log(isConditionMet);
    if (!isConditionMet) {
      alert("You have to choose at least one type of character !");
    }
  } while (!isConditionMet); // loop until one option is chosen

  return { passLength, specialSymbols, upperABC, lowerABC, numericOptions };
}

// Function for getting a random element from an array
function getRandomElement(arr) {
  if (arr.length === 0) return undefined; // Checking if array is not empty
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  console.log("clicked");
  multiSelect = [];
  randomPass = "";
  // Getting password options
  const { passLength, specialSymbols, upperABC, lowerABC, numericOptions } =
    getPasswordOptions();

  if (specialSymbols) {
    multiSelect = [...multiSelect, ...specialCharacters];
  }
  if (upperABC) {
    multiSelect = [...multiSelect, ...upperCasedCharacters];
  }
  if (lowerABC) {
    multiSelect = [...multiSelect, ...lowerCasedCharacters];
  }
  if (numericOptions) {
    multiSelect = [...multiSelect, ...numericCharacters];
  }
  // Generating password
  // Display password to the page
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
