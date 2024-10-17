// key event
document.addEventListener("keydown", function(event) {
    // prompt ascii code of pressed key
    console.log(`Key ${event.key} was pressed`)
    console.log(`ascii code of the pressed key is ${event.keyCode}`)
    console.log(`Using 'which' property ${event.which}`)
})