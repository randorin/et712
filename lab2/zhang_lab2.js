/* 
* Betsy Zhang 
* Sep 3, array and conditional statement
*/
console.log("----- BETSY ZHANG -----")
console.log("\n------ EXAMPLE 1: ARRAY ------\n")
let fruits = ['oranges', 'apples', 'peaches']
console.log(fruits)
console.log(fruits[1])
let numbers = [-2, 9.2, 5, -3.2, ]
console.log(`The first number is ${numbers[0]}`)
let mixedarray = [false, 6, 'Peter Pan', true, 'Martha']
console.log(mixedarray)
console.log("\n------ EXAMPLE 2: ARRAY METHODS ------")
// reverse items in array
mixedarray.reverse()
console.log(`Reversed mixedarray = ${mixedarray}`)
mixedarray.shift()
console.log(`After shift method = ${mixedarray}`)
mixedarray.unshift("QCC", "ET712", 2024)
console.log(`After unshift method = ${mixedarray}`)
mixedarray.push('$9.50', -2)
console.log(`After push method = ${mixedarray}`)
let searchitem = 6
let resultsearch = mixedarray.indexOf(searchitem)
console.log(`What is the index of ${searchitem} in the list? ${resultsearch}`)

console.log("\n ------ EXAMPLE 3: CONDITIONAL ------")
let day = true
let night = false
let num = 1

console.log(`Before if statement, num = ${num}`)
if (day) {
    num += 20
}

console.log(`num is ${num}`)

console.log("\n------ EXAMPLE 4: if-else ------")
let age = 15

if (age >= 21) {
    console.log("Adult")
}
else {
    console.log("Under age")
}

console.log("\n------ EXAMPLE 5 ------")
let num1 = 10
let num2 = 'Peter Pan'

if (num1 === num2) {
    console.log("The numbers are the same")
}
else if (num2 > num1) {
    console.log("num2 is greater than num1")
}
else {
    console.log("Unable to compare the numbers")
}

console.log("\n ------ EXAMPLE 6: conditionals------")
let pin = prompt("Enter a pin number: ")
let checkpin = isNaN(pin)

if (checkpin) {
    console.log("You didnt enter a number")
}
else if (!checkpin && pin !== '') {
    console.log(`Your pin is ${pin} `)
}
else if (pin === '') {
    console.log("You didnt enter anything")
}
else if (pin == null) {
    console.log("You cancelled the dialog box")
}
else {
    console.log("Invalid operation")
}

console.log("\n------ EXERCISE 1 ------")
let value = prompt('Enter a value (string, number, etc): ')
if (value >= 0) {
    console.log(`${value} is a number`)
} else if (value < 0) {
    console.log(`${value} is a negative number`)
} else if (typeof value === "string") {
    console.log(`${value} is a string`)
}

console.log("\n------ EXERCISE 2 ------")

function colorSelector() {
console.log("Color Key: \na = white \nb = blue \nc = red \nd = black \ne = pink \nf = green \ng = purple")
let colorSelector = prompt('Choose a color by typing the corresponding letter(s) of the color in lowercase or uppercase: ')
colorSelector = colorSelector.toLowerCase();
switch (colorSelector) {
    case "a":
        console.log(`You selected the white color.`);
        break
    case "b":
        console.log(`You selected the blue color.`);
        break
    case "c":
        console.log(`You selected the red color.`);
        break
    case "d":
        console.log(`You selected the black color.`);
        break
    case "e":
        console.log(`You selected the pink color.`);
        break
    case "f":
        console.log(`You selected the green color.`);
        break
    case "g":
        console.log(`You selected the purple color.`);
        break
    default:
        console.log("Color is not on the list")
}
}
colorSelector();