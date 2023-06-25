const passwordbox = document.getElementById("password");
const length = 12;

// --------Characters-------
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*(){}[]<>/-=+~_|";
const allchars = upperCase+lowerCase+Numbers+Symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; 
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
    password += Numbers[Math.floor(Math.random() * Numbers.length)]; 
    password += Symbols[Math.floor(Math.random() * Symbols.length)]; 
    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)]; 
    }
    passwordbox.value = password; 
}

function copypassword(){
  // Select the text field
  passwordbox.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices
 
   // Copy the text inside the text field
   navigator.clipboard.writeText(passwordbox.value);
}

var typed = new Typed(".auto-type",{
    strings:["Strong Password","Random Password","Robust Password"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
})