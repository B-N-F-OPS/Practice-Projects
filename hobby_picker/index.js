import { data } from './data.js'

const hobbiesContainer = document.getElementById('hobbiesContainer');

// loop through the data and render out each hobby
function render() {
    let allhobbies = ''
    for (let person of data) {
        for (let hobby of person.hobbies)
            allhobbies += `
        <div class="hobby">
            <label for="${hobby}">${hobby}</label>
            <input
                type="radio"
                id="${hobby}"
                name="hobby-choice"
                value="${hobby}"
            >
        </div>`
    }
    hobbiesContainer.innerHTML = allhobbies
}

render()

//select one single hobby, collect the id of selected and highlight selection.
hobbiesContainer.addEventListener('click', (e)=> {
    const hobbyId = document.getElementById(e.target.id);
    // console.log(hobbyId.parentElement)
    hobbyId.parentElement.classList.add('highlight');  
});

const individualHobby = document.getElementsByClassName('hobby');
for (let eachHobby of individualHobby) {
    eachHobby.parentElement.classList.remove('highlight')
}