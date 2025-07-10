let meal = []

// user clicks 'Add meal'
const addmealEl = document.getElementById('addMeal-btn')

addmealEl.addEventListener('click', function() { //evoked once add meal is clicked
    const ulEl = document.getElementById('ul-el') //collects the id of where random meal will appear
    let inputEl = document.getElementById('input-el') //collects id of input field
    
    if (inputEl.value) {
        meal.push(inputEl.value)
        localStorage.setItem('meals', JSON.stringify(meal)) //saves to local storage
        inputEl.value = ''    //returns the input value to null    
    }
})

// user clicks 'PickRandom meal'
const pickEl = document.getElementById('pick-btn')

pickEl.addEventListener('click', function() {
    const ulEl = document.getElementById('ul-el')
    let randomMeal = ''
    const mealsFromLocalStorage = JSON.parse( localStorage.getItem('meals') )
    
    for (let i=0; i<mealsFromLocalStorage.length; i++) {
        let randomIndex = Math.floor( Math.random()* mealsFromLocalStorage.length )
        randomMeal = mealsFromLocalStorage[randomIndex]
    }
    ulEl.innerHTML = `<li class="picked-meal">${randomMeal}</li>`
})

// user clicks 'Clear All'
const clearEl = document.getElementById('clear-btn')

clearEl.addEventListener('click', function() {
    localStorage.clear()
})