const adjectives = [
  "Brave", "Happy", "Clever", "Loyal", "Fierce", "Quick", "Calm", "Witty", "Gentle", "Bold",
  "Proud", "Kind", "Smart", "Zany", "Silly", "Wise", "Noble", "Quiet", "Wild", "Curious",
  "Charming", "Cool", "Fearless", "Sneaky", "Bright", "Mighty", "Lazy", "Swift", "Jolly", "Bouncy",
  "Sharp", "Spunky", "Peaceful", "Nervy", "Noisy", "Tough", "Playful", "Lively", "Crafty", "Sassy",
  "Daring", "Eager", "Stubborn", "Sunny", "Giddy", "Weird", "Shy", "Snappy", "Lucky", "Zesty"
]
const animals = [
  "Tiger", "Elephant", "Fox", "Wolf", "Penguin", "Dolphin", "Panda", "Koala", "Leopard", "Zebra",
  "Giraffe", "Rabbit", "Kangaroo", "Bear", "Otter", "Owl", "Eagle", "Hawk", "Lion", "Lynx",
  "Raccoon", "Cheetah", "Moose", "Buffalo", "Turtle", "Sloth", "Frog", "Chameleon", "Parrot", "Bat",
  "Swan", "Peacock", "Alligator", "Crocodile", "Gorilla", "Chimpanzee", "Hyena", "Meerkat", "Llama", "Antelope",
  "Toad", "Mole", "Hedgehog", "Seal", "Whale", "Walrus", "Crab", "Snail", "Goat", "Donkey"
]
const numbers = [0,1,2,3,4,5,6,7,8,9]


const generateEl = document.getElementById("Generate")

generateEl.addEventListener("click", function() {
    let inputEL = document.getElementById("input-el")
    const errorEl = document.getElementById("error-el")
    const Username1El = document.getElementById("Username1-el")
    const Username2El = document.getElementById("Username2-el")


    if (inputEL.value < 1) {
        errorEl.textContent = ("no digits found")
    } else if (inputEL.value > 9) {
        errorEl.textContent = ("digits insanely high. Recommended 1-9")
    } else {

        function randoMized() {
            let UsernameOutput = ""
            //randomize Animal selection
            let randomAnimal = ""
            for (let i=0; i<1; i++) {
            let randomIndex = Math.floor( Math.random()* animals.length)
            randomAnimal += animals[randomIndex]
            }

            //randomize adjectives selection
            let randomAdjective = ""
            for (let i=0; i<1; i++) {
            let randomIndex = Math.floor( Math.random()* adjectives.length)
            randomAdjective += adjectives[randomIndex]
            }

            //randomize number selection
            let randomNumber = ""
            for (let i=0; i<inputEL.value; i++) {
            let randomIndex = Math.floor( Math.random()* numbers.length)
            randomNumber += numbers[randomIndex]
            }
            UsernameOutput += randomAnimal + randomAdjective + randomNumber
            return UsernameOutput
        }

        errorEl.textContent = ""
        Username1El.textContent = randoMized()
        Username2El.textContent = randoMized()
        inputEL.value = ''
    }
})