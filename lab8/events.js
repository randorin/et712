let squarediv = document.querySelector('.square')
squarediv.onclick = function() {
    squarediv.style.backgroundColor = "magenta"
}

let animal = document.querySelector('.btn-animal')
let animalsdiv = document.querySelector('.animalsdiv')

let animals = ['fish', 'dog', 'turtle', 'cat', 'spider']

animal.onclick = function() {
    animalsdiv.textContent = animals[Math.floor(Math.random()*4)]
}

let numberdiv = document.querySelector('.numberdiv')

numberdiv.onmouseout = function(){
    numberdiv.textContent = Math.ceil(Math.random()*99)
}

function pickcolor() {
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}

numberdiv.onclick = function() {
    numberdiv.style.backgroundColor = pickcolor()
}