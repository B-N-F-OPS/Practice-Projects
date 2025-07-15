const addTaskEl = document.getElementById('addTask-btn');
addTaskEl.addEventListener('click', function() {
    const listItems = document.getElementById('listItems')
    const inputEL = document.getElementById('input-el');
    listItems.innerHTML += `<li><input type="checkbox">${inputEL.value}</li>`
    localStorage.setItem('tasks', JSON.stringify(inputEL.value))
    inputEL.value = ''
})

const deleteBtn = document.getElementById('delete-btn')
deleteBtn.addEventListener('click', function() {
    localStorage.clear()
    const inputEL = document.getElementById('input-el');
    listItems.innerHTML = ''
})

const inputEL = document.getElementById('input-el');
inputEL.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const listItems = document.getElementById('listItems')
        listItems.innerHTML += `<li><input type="checkbox">${inputEL.value}</li>`
        localStorage.setItem('tasks', JSON.stringify(inputEL.value))
        inputEL.value = ''
    }
});