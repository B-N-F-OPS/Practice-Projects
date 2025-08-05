import { data, renderHobbies } from './data.js'

const hobbiesContainer = document.getElementById('hobbiesContainer');
const getPartnerBtn = document.getElementById('getPartner-btn')
const imageDiv = document.getElementById('image-div')
const modalContainer = document.getElementById('modal')
const closeModalBtn = document.getElementById('closeModalBtn')
const testContainer = document.getElementById('testContainer')
// const checkBoxEl = document.getElementById('checkbox')



renderHobbies() // calling the function to render the hobbies without any duplicates

// function with eventListener to handle changes in radio buttons plus highlight
// function to listen checkbox:checked and take data from radio buttons and filter the data for english only
// getpartner button should check if checkbox is checked or not. if checked, find picture url and render the data into the modal box


document.addEventListener('click', (e)=> {
    //function to highlight the radios when clicked
    hobbiesContainer.addEventListener('change', ()=> {

        const radioCheck =  document.querySelector('input[type="radio"]:checked');
        const radioClass = document.getElementsByClassName('hobby') //returns an array so i need to iterate

        if (radioCheck) {
            for (let radios of radioClass) {
                radios.classList.remove('highlight')
            }
            document.getElementById(e.target.id).parentElement.classList.add('highlight')
        }
    });

    //fuction to get only the hobbies of radios
    function getHobbyArray() {
        const filteredHobbies = data.filter( (set)=> {
            return set.hobbies.includes(e.target.value)
        })
        return filteredHobbies
    }

    // filtering getHobbyArray() to get only the english people
    function boxIsChecked() {
        const filteredHobbies = getHobbyArray()
        const filterEnglish = filteredHobbies.filter((set)=> {
            return set.languages.includes('English')
        })
        return filterEnglish     
    }

    // get the url for the picture from a random Array that has already been filtered
    function getpicture(dataFiltered) {
        const randomIndex = Math.floor( Math.random()* dataFiltered.length )
        return dataFiltered[randomIndex].picture
    }


    // when user clicks on GETPARTNER button
    getPartnerBtn.addEventListener('click', ()=> {
        const boxCheck =  document.querySelector('input[type="checkbox"]:checked');
        const radioCheck =  document.querySelector('input[type="radio"]:checked');
        let boxIsCheckedArray = boxIsChecked()
        let getHobbyArrays = getHobbyArray()

        if(boxCheck && radioCheck) {
            const picture = getpicture(boxIsCheckedArray)
            modalContainer.style.display = 'block'
            imageDiv.innerHTML = `<img class='imgResult' src="${picture}">`
            testContainer.classList.add('testcontainer')

        } else if (radioCheck) {
            const pics = getpicture(getHobbyArrays)
            modalContainer.style.display = 'block'
            imageDiv.innerHTML = `<img class='imgResult' src="${pics}">`
            testContainer.classList.add('testcontainer')
        } else {
            alert('select something Hitler')
        }
        

    })

    closeModalBtn.addEventListener('click', ()=> {
        modalContainer.style.display = 'none'
        testContainer.classList.remove('testcontainer')
    })

})







