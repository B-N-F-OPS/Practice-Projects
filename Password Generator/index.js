const characters = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_",
    "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];



function Generate() {
    let randomPass1 = ""
    let randomPass2 = ""
    let password1EL = document.getElementById("password1-el")
    let password2EL = document.getElementById("password2-el")
    let inputEL = document.getElementById("input-el").value
    let errorEL =document.getElementById("error-el") 

    if (inputEL > 20) {
        errorEL.textContent = 'password length unreasonable'
    } else if (inputEL < 8) {
        errorEL.textContent = 'password too short'
    } else { 

        //for first password
        for (let i=0; i<inputEL; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            randomPass1 += characters[randomIndex]
        }
        password1EL.textContent = randomPass1 // put it outside the loop coz because i only want to update the displayed password once, after it's fully generated — not after every single character is added.
        errorEL.textContent = ''
        // for second password
        for (let i=0; i<inputEL; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            randomPass2 += characters[randomIndex]
        }
        password2EL.textContent = randomPass2
    }
}

// not working. aim is for user to be able to copy text to clipboard
function copyText() {
    let password1EL = document.getElementById("password2-el");

    password1EL.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(password1EL.innerText);
}

function copyText2() {
    let password2EL = document.getElementById("password2-el");

    password2EL.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(password2EL.innerText);
}