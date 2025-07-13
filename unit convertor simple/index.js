// 1 meter = 3.28084 feet
// 1 litre =  0.264172 gallons
// 1 kilogram = 2.20462 pounds

const meterToFeet = 3.28084
const ltrToGallon = 0.264172
const kgToPound = 2.20462

const lengthEl = document.getElementById('lenght-el')
const volumeEl = document.getElementById('Volume-el')
const massEl = document.getElementById('mass-el')

const convertEl = document.getElementById('convert-el')
convertEl.addEventListener('click', function() {
    const inputEl = document.getElementById('input-el')
    if (inputEl.value) {
        lengthEl.textContent =`${inputEl.value} meters is ${(inputEl.value * meterToFeet).toFixed(3)} feet aternatively, ${inputEl.value} feet is ${(inputEl.value / meterToFeet).toFixed(3)} meters.`

        volumeEl.textContent = `${inputEl.value} litres is ${(inputEl.value * ltrToGallon).toFixed(3)} feet aternatively, ${inputEl.value} feet is ${(inputEl.value / ltrToGallon).toFixed(3)} meters.`

        massEl.textContent = `${inputEl.value} meters is ${(inputEl.value * kgToPound).toFixed(3)} feet aternatively, ${inputEl.value} feet is ${(inputEl.value / kgToPound).toFixed(3)} meters.`
    }
})