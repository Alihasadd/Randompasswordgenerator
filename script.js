const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById('el-passwordOne') // 1 connection JS > HTML
let passwordTwo = document.getElementById('el-passwordTwo')
let button = document.getElementById('generatePasswordBtn')

function randomCharacter(){
   let randomNum = Math.floor(Math.random() * characters.length)
   return characters[randomNum]
}

function randomGen(){
    let string = "" 
    for (let i = 0; i < 15; i++){
     string += randomCharacter()
} 
    return string // 2 Connection Output 
}

button.addEventListener('click', () => {
  passwordOne.innerText = randomGen();
  passwordTwo.innerText = randomGen();
})


function copy() {
  let copyText = document.querySelector(passwordOne);
  copyText.select();
  document.execCommand("copy");
}

document.querySelector(passwordOne).addEventListener("click", copy);






/*//https://projects.scrimba.com/password-generator

https://www.figma.com/design/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator-(New-version)?node-id=102-702&t=C08bkbgs3DMxFw5M-0

function jump(only when i jump) {
    step 1 bend knees
    step 2 push off floor
    step 3 land on floor
}*/