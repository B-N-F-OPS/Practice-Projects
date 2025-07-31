import { characters, copyText } from './data.js'


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

// listen to which password was clicked
const passwordsEL = document.getElementById("passwords-el")
passwordsEL.addEventListener('click', function(e) {
    copyText(e.target.id)
})