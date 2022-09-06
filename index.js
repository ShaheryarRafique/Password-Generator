const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = "";
let copyPassOneEl = document.querySelector("#copyPassOne-el");
let copyPassSecondEl = document.querySelector("#copyPassSecond-el");
let passwordLengthEl = document.querySelector("#passLength-el");

function generatePassword() {
    copyPassOneEl.value = generateCombination(passwordLengthEl.value);
    copyPassSecondEl.value = generateCombination(passwordLengthEl.value);
}

//copy text of field one
copyPassOneEl.addEventListener('click', function() {
    copyText(copyPassOneEl);
});

//copy text of field second
copyPassSecondEl.addEventListener('click', function() {
    copyText(copyPassSecondEl);
});

//copy text function
function copyText(element) {
    element.focus();
    element.select();
    navigator.clipboard.writeText(element.value);
    alert("Copied: " + element.value);
}

//generate the combinations
function generateCombination(length) {
    password = "";
    for(let i = 0; i < length; i++) {
        let passwordIndex = Math.floor(Math.random() * characters.length);
        password += characters[passwordIndex];
    }
    return password;
}