
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(values){

  // Password is currently blank! We need to make a better one
  let lowerCase=confirm("Do you want to use lowercase letters");
  let upperCase=confirm("Do you want to use uppercase letters?");
  let numbers=confirm("Do you want to use numbers?");
  let special=confirm("Do you want to use special characters?")
  let length=prompt("Choose a password between 1 and 128")

  //Arrays
  let lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"
  let upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numCharr="1234567890"
  let specialCharacters="@!#$%^&*"
  
  let valCharr=""

  if (lowerCase) {
    valCharr = valCharr + lowerCaseLetters

   }

   if (upperCase) {
     valCharr = valCharr + upperCaseLetters
   }

   if (numbers) {
    valCharr = valCharr + numCharr
   }

   if (special) {
     valCharr = valCharr + specialCharacters
   }

  // Set password length

  // password values
  let password =""

  // For Loop
  for (let i=0; i <= length; i++){
    password = password+valCharr.charAt(Math.floor( Math.random()* valCharr.length));

  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)