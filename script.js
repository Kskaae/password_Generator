// Constants
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
  let  uppercase=confirm("Do you want to use uppercase letters?");
  let  numbers=confirm("Do you want to use numbers?");
  let special=confirm("Do you want to use special characters?")
  let length=prompt("Choose a password between 1 and 128")

  //Arrays
  let lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"
  let upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numCharr="1234567890"
  let specialCharacters="@!#$%^&*"
  // or
  let valCharr=""
  Console.log ("password","confirm", "lowercase", "uppercase", "numbers", "special characters", "prompt");

  // Set password length/complexity//
  let complexity=document.getElementById("#password") .values;
  // password values
  let password =("")

  //For Loop
  for (let i=0; i <= complexity; i++){
    password= password+values.charAt(math.floor() * math.floor(values.length-1));
  }

  // add password to text box/display
  document.getElementById("display").value= password;

  if(document.getElementById("#password").value > 0){
    document.getElementById("length").innerHTML="length: " + document.getElementById("#password") .value; 
  }
 else{
   document.getElementById("length") .innerHTML= ""
 }
 function UserInput(ps) {
  document.getElementById("password").textContent = ps;



  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)