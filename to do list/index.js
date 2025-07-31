import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";








const deleteBtn = document.getElementById('delete-btn')
deleteBtn.addEventListener('click', function() {
    localStorage.clear()
    const inputEL = document.getElementById('input-el');
    listItems.innerHTML = ''
})

const inputEL = document.getElementById('input-el');
inputEL.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (inputEL.value) {
            const listItems = document.getElementById('listItems')
            listItems.innerHTML += `<li><input type="checkbox">${inputEL.value}</li>`
            localStorage.setItem('tasks', JSON.stringify(inputEL.value))
            inputEL.value = ''
        };
    };
});

const addTaskEl = document.getElementById('addTask-btn');
addTaskEl.addEventListener('click', function() {
    if (inputEL.value) {
        const listItems = document.getElementById('listItems')
        const inputEL = document.getElementById('input-el');
        listItems.innerHTML += `<li><input type="checkbox">${inputEL.value}</li>`
        localStorage.setItem('tasks', JSON.stringify(inputEL.value))
        inputEL.value = ''
    }
})

console.log('we are done')
