import { data } from './data.js'

const hobbiesContainer = document.getElementById('hobbiesContainer');
const getPartnerBtn = document.getElementById('getPartner-btn')

//function to remove duplicate hobbies. this function is an array
function removeDoubles() {
    let hobbiesArray = []
    for (let person of data) {
        for (let hobby of person.hobbies) {
            if (!hobbiesArray.includes(hobby)) {
                hobbiesArray.push(hobby)
            }
        }
     }
     return hobbiesArray //returns an array
}

// loop through the data and render out each hobby
function render() {
    let allhobbies = ''
    for (let hobby of removeDoubles()) { 
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
function highlightchecked(e) {
    const hobbys = document.getElementsByClassName('hobby')
    for (let hobby of hobbys) {
        hobby.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

//listening for change of radio buttons within the contaimer
hobbiesContainer.addEventListener('change', highlightchecked)

//check if the the radio has been checked when clicking the button and checkbox checked
//button click
getPartnerBtn.addEventListener('click', ()=> {
    // function. check which radio is checked
    function radioCheck() { //returns a value e.g coding
        const isRadioChecked= document.querySelector('input[type="radio"]:checked');
        if(isRadioChecked) {
            return isRadioChecked.value //returns e.g coding, vlogging...
        }
    }

    // check if checkbox is checked and return the filtered list
    function boxCheck() { //returns an array of people who speak english. has objects inside 
        const isBoxChecked = document.querySelector('input[type="checkbox"]:checked');
        if (isBoxChecked) {
            const language = data.filter( (set)=> {
                return set.languages.includes("English")
            })
            return language
        }
    }

    // function to return people with shared hobby
    function shareHobby() { //returns an array of people who share checked hobby
        const hobbyPeople = data.filter( (set)=> {
            return set.hobbies.includes(radioCheck())
        })
        return hobbyPeople 
    }

    //function if people select both radio and checkbox
    function newArrays() { //returns a combined array of english people and shared hobby people
        let newArray = boxCheck()
        for (let share of shareHobby()) {
            newArray.push(share)
        }
        return newArray // array of both english and hobbie people but has duplicates
    }

    console.log(newArrays())

    // const oldArrays = data.filter( (set)=> {
    //     newArray.push( set.languages.includes("English") )
    // })


    //if radio and/or box are checked
    // if ( radioCheck() && boxCheck() ) {
    //     console.log('both checked')
    // } else if (radioCheck()){
    //     console.log('radio checked')
    // } else {
    //     console.log('you have to select a hobby')
    // }

});


