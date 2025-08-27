import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://test-project-001-20929-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, 'userAcounts')

// Grabbed DOM IDs
// new account form
const newAccountForm = document.getElementById('newAccountForm');
const newPassword = document.getElementById('newPassword');
const noMatch = document.getElementById('nomatch')
const newAccountcontainer = document.getElementById('newAccountForm')
const accSuccess = document.getElementById('accSuccess')

//login form
const loginBox = document.getElementById('loginBox')
const newAccountLink = document.getElementById('newAccountLink')
const footer = document.getElementById('footer')


// when user wants to create account
function createAccount() {
    loginBox.style.display = 'none'
    newAccountcontainer.style.display = 'block'
    footer.style.display = 'none'
    newAccountForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        const newAccountFormdata = new FormData(newAccountForm)
        const password = newAccountFormdata.get('newPassword-input')
        const confirmpassword = newAccountFormdata.get('confirmPassword-input')

        if (password === confirmpassword) {
            setTimeout(() => {
                newAccountData()
            }, 1000);
            newAccountcontainer.style.display = 'none'
            setTimeout(() => {
                newAccountcontainer.style.display = 'none'
                accSuccess.style.display= 'block'
            }, 1100);
            setTimeout(() => {
                loginBox.style.display = 'block' // subject to change
                accSuccess.style.display= 'none'
                footer.style.display = 'flex'
            }, 1500);
            
        } else if (password != confirmpassword)
            noMatch.textContent = '⚠️ passwords do not match comrade'

    })
}


function newAccountData() {
    const newAccountFormdata = new FormData(newAccountForm)
    const fullName = newAccountFormdata.get('newName-input')
    const email = newAccountFormdata.get('newEmail-input')
    const password = newAccountFormdata.get('newPassword-input')
    push(referenceInDB, {fullName, email, password})
}

//user clicks on create new account from login page, create account page loads
newAccountLink.addEventListener('click', createAccount);

// user enters details
// loginBox.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     console.log(getDBData())
// });



let dbData = null; // global

onValue(referenceInDB, (snapshot) => {
    dbData = snapshot.val(); // store data for later
});

loginBox.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Data from DB:", dbData); // will work *if* data is loaded
});

