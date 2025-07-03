// home wins
let takehomeEl = document.getElementById("takehome")

function add1home() {
    let currentvalue = takehomeEl.innerText
    let result = parseInt(currentvalue) +1
    takehomeEl.innerText = result
}

function add2home() {
    let currentvalue = takehomeEl.innerText
    let result = parseInt(currentvalue) +2
    takehomeEl.innerText = result
}

function add3home() {
    let currentvalue = takehomeEl.innerText
    let result = parseInt(currentvalue) +3
    takehomeEl.innerText = result
}

// Guests wins
let takeguestsEl = document.getElementById("takeguests")
function add1guests() {
    let currentvalue = takeguestsEl.innerText
    let result = parseInt(currentvalue) +1
    takeguestsEl.innerText = result
}

function add2guests() {
    let currentvalue = takeguestsEl.innerText
    let result = parseInt(currentvalue) +2
    takeguestsEl.innerText = result
}

function add3guests() {
    let currentvalue = takeguestsEl.innerText
    let result = parseInt(currentvalue) +3
    takeguestsEl.innerText = result
}

