import { menuArray } from './data.js'

const container = document.getElementById('container')
const jimmysMenu = document.getElementById('jimmysMenu');
const PrecheckoutContainer = document.getElementById('preCheckoutContainer');
const ordersContainer = document.getElementById('odersContainer');
const totalPrice = document.getElementById('totalPrice');
const completeOrderBtn = document.getElementById('completeOrderBtn');
const checkoutContainer = document.getElementById('checkoutContainer')
const paymentForm= document.getElementById('paymentForm');
const endNote = document.getElementById('endNote');
const endMessage = document.getElementById('endMessage');
const themePack = document.getElementById('themePack')
const rateCard = document.getElementById('rateCard')

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
const discount = 3
let genPrice = 0
let newstr = ''
jimmysMenu.addEventListener('click', (e)=> {
    e.target.id? PrecheckoutContainer.classList.remove('preCheckout'): null

    menuArray.filter( items=> {
        if (items.name === e.target.id) {
            newstr += 
            `<div class="orderItems" id="${items.id}">
                <h2 class=" itemName">${items.name}</h2>
                <button class="removeBtn" id="removeBtn">remove</button>
                <h3 class="orderXprice itemPrice">$ ${items.price}</h3>
            </div>`
        genPrice -= discount
        genPrice += items.price
        }
    })
    ordersContainer.innerHTML = newstr
    totalPrice.textContent = genPrice
})

//  use clicks on remove an order


ordersContainer.addEventListener('click', (e) => {

    if(e.target.classList.contains('removeBtn')) {
        e.target.parentElement.remove()
    }
})

// user clicks comlete order
completeOrderBtn.addEventListener('click', ()=> {
    checkoutContainer.classList.remove('checkoutPage');
    jimmysMenu.style.filter= 'blur(5px)';
    PrecheckoutContainer.style.filter= 'blur(5px)';
})

// when use clicks on pay button
paymentForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const formData= new FormData(paymentForm)
    const cardHHolderName = formData.get('fullName')

    checkoutContainer.style.display = 'none'
    PrecheckoutContainer.style.display = 'none'
    endMessage.textContent = `Thanks, ${cardHHolderName}! your order is on it's way!`
    endNote.style.display = 'flex'
    jimmysMenu.style.filter= 'blur(5px)';
    PrecheckoutContainer.style.filter= 'blur(5px)';
    setTimeout( ()=> {
        rateCard.classList.remove('rates')
    },3000)
})

// change theme
themePack.addEventListener('click', ()=> {
    themePack.textContent = '🔆'
    container.style.background = 'black'
    container.style.color = 'white'
})
