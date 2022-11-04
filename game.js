//DIV AREAS
let charactercreation = document.getElementById('charactercreation')
let startscreen = document.getElementById('startscreen')
let gamescreen = document.getElementById('gamescreen')


//BUTTONS
let startscreenbtn = document.getElementById('startscreenbtn')
let classbtn = document.getElementById('classbtn')
let chooseclassbtn = document.getElementById('chooseclassbtn')
let choosecharexit = document.getElementById('choosecharexit')
let choosewarriorbtn = document.getElementById('choosewarriorbtn')
let choosesorcererbtn = document.getElementById('choosesorcererbtn')

let chooseracebtn = document.getElementById('chooseracebtn')
let chooseraceexit = document.getElementById('chooseraceexit')
let choosehumanbtn = document.getElementById('choosehumanbtn')
let chooseelfbtn = document.getElementById('chooseelfbtn')
let advancedialogbtn = document.getElementById('advancedialogbtn')


let startadvancebtn = document.getElementById('startadvancebtn')

//TEXTHOLDERS
let playernameholder = document.getElementById('playernameholder')
let playernameinput = document.getElementById('playernameinput')


startscreenbtn.addEventListener("click",() => {
    charactercreation.style.display = 'block'
    startscreen.style.display = 'none'
});

chooseclassbtn.addEventListener("click",() => {
    classdiv.style.display = 'block'
    racediv.style.display = 'none'
});

choosecharexit.addEventListener("click",() => {
    classdiv.style.display = 'none'
});

choosewarriorbtn.addEventListener("click",() => {
    chooseclassbtn.textContent = 'Warrior'
    let chosenclass = 'Warrior'
});

choosesorcererbtn.addEventListener("click",() => {
    chooseclassbtn.textContent = 'Sorcerer'
    let chosenclass = 'Sorcerer'
});




chooseracebtn.addEventListener("click",() => {
    racediv.style.display = 'block'
    classdiv.style.display = 'none'
});

chooseraceexit.addEventListener("click",() => {
    racediv.style.display = 'none'
});

choosehumanbtn.addEventListener("click",() => {
    chooseracebtn.textContent = 'Human'
});

chooseelfbtn.addEventListener("click",() => {
    chooseracebtn.textContent = 'Elf'
});



startadvancebtn.addEventListener("click",() => {
    charactercreation.style.display = 'none'
    gamescreen.style.display = 'block'

    let playername = document.getElementById("playernameinput").value
    let classname = chooseclassbtn.textContent
    let racename = chooseracebtn.textContent


    //TYPING OUT TEXT
    const textDisplay = document.getElementById('gamescreentextarea')
    const phrases = ['You wake sweating. Luckily enough, it was just a dream. You dreamt of great green and long streches, you as the Duc of the Knights overlooking the oncoming adventure. Mountains to the right, luring black forest to the left.' + playername + ' got to his senses, and realized he was but a simple civilian living in the city. Race is: ' + classname + '. Class is: ' + racename]
    let i = 0
    let j = 0 
    let currentPhrase = []
    let isDeleting = false
    let isEnd = false
    

    function loop () {

    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j])
        j++
        textDisplay.innerHTML = currentPhrase.join('')
        }

        if(isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j])
        j--
        textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            

            return;
        }

        if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i === phrases.length) {
            i = 0


            return;


        }
        }
    }
    const spedUp = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (300 -200) + 15
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
    }

    loop()




});



