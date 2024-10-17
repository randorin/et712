// key event
document.addEventListener("keydown", function(event) {
    // prompt ascii code of pressed key
    console.log(`Key ${event.key} was pressed`)
    console.log(`ascii code of the pressed key is ${event.keyCode}`)
    console.log(`Using 'which' property ${event.which}`)
})

let btnpressme = document.querySelector("button.btnpressme")
// class toggle
btnpressme.addEventListener("click", function(e) {
    if (e.target.textContent === "PRESS ME") {
        e.target.textContent = "Button was pressed!"
    } else {
        e.target.textContent = "PRESS ME"
    }
    // toggle class in a button
    e.target.classList.toggle("btnactive")
})

// prevent default
// collect element
let linkqcc = document.querySelector(".linkqcc")
linkqcc.addEventListener("click", function(event) {
    event.preventDefault()
    alert("Website on maintainance")
})
// modal window
// collect element
let modalwindow = document.querySelector(".modalwindow")
let closemodalx = document.querySelector(".closemodalx")
let btnpromotion = document.querySelector(".btnpromotion")
let btnopenmodal = document.querySelector(".btnopenmodal")
closemodalx.addEventListener("click", function() {
    modalwindow.style.display = "none"
})
btnpromotion.addEventListener("click", function() {
    modalwindow.style.display = "none"
})
// open modal window
btnopenmodal.addEventListener("click", function() {
    modalwindow.style.display = "block"
})