import add from './test.js'

const addEl = document.getElementById('add-el')
addEl.addEventListener('click', function () {
    const num1EL = document.getElementById('num1-el');
    const num2EL = document.getElementById('num2-el');
    const ansEL = document.getElementById('ans-el');

    let result = add( Number( num1EL.value),  Number(num2EL.value) )
    ansEL.textContent = result
});