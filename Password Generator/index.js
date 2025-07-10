const characters = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_",
    "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


const generateEl = document.getElementById("generate")
generateEl.addEventListener("click", function() {
    let password1EL = document.getElementById("password1-el")
    let password2EL = document.getElementById("password2-el")
    let inputEL = document.getElementById("input-el")
    let errorEL =document.getElementById("error-el") 

    if (inputEL.value > 20) {
        errorEL.textContent = 'password length unreasonable'
    } else if (inputEL.value < 8) {
        errorEL.textContent = 'password too short'
    } else { 
        function randomize() {
            let randomPass = ''
            for (let i=0; i<inputEL.value; i++) {
                let randomIndex = Math.floor(Math.random() * characters.length)
                randomPass += characters[randomIndex]
            }
            return randomPass
        }
        password1EL.textContent = randomize()
        password2EL.textContent = randomize()
    }
})



// copy text to clipboard
let password1EL = document.getElementById("password1-el")
let password2EL = document.getElementById("password2-el")
let pass1 = "password2-el"
let pass2 = "password2-el"

password1EL.addEventListener("click", function() {
    const text = document.getElementById('password1-el').innerText
    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Text copied to clipboard!");
    })
    .catch(err => {
        console.error("Failed to copy: ", err);
    })
}) 

password2EL.addEventListener("click", function() {
    const text = document.getElementById('password2-el').innerText
    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Text copied to clipboard!");
    })
    .catch(err => {
        console.error("Failed to copy: ", err);
    })
})
