import { menuArray } from './data.js'

const jimmysMenu = document.getElementById('jimmysMenu');
const PrecheckoutContainer = document.getElementById('preCheckoutContainer');
const odersContainer = document.getElementById('odersContainer');
const totalPrice = document.getElementById('totalPrice');

// first iterate through menu and render to page
const menu = menuArray.map( (items)=> {
    return `<section class=" menu">
                <h2 class="emoji">${items.emoji}</h2>
                <div class="menuItems">
                    <h2 class="itemName">${items.name}</h2>
                    <h3 class="ingredients">${items.ingredients.join(', ')}</h3>
                    <h4 class="itemPrice">$ ${items.price}</h4>
                </div>
                <button class="addBtn" id='${items.name}'>+</button>
            </section>`
}).join('')

jimmysMenu.innerHTML = menu

// when user clicks add button item gets added to the precheckout page
jimmysMenu.addEventListener('click', (e)=> {
    e.target.id? PrecheckoutContainer.classList.remove('preCheckout'): null

    let newstr = ''
    menuArray.filter( items=> {
        if (items.name === e.target.id) {
            newstr += 
            `<div class="orderItems">
                <h2 class=" itemName">${items.name}</h2>
                <button class="removeBtn">remove</button>
                <h3 class="orderXprice itemPrice">$ ${items.price}</h3>
            </div>`
        genPrice += items.price
        console.log(genPrice)
        }
    })
    odersContainer.innerHTML += newstr
    totalPrice.textContent = genPrice
})
