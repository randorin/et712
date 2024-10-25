/**Betsy Zhang 
 * Sep 10, Function
 * Sep 12, function calling function
 */
console.log("Betsy Zhang")
console.log("Example 1: defining a function")

function msg() {
    console.log("hello world")
}

function printnumber() {
    for (let n = 3; n > 0; n--) {
        console.log(`n = ${n}`)
    }
}

console.log("EXAMPLE 2")
function greeting(username) {
    console.log(`Welcome to Javascript programming ${username}`)
}

function touppername(name) {
    console.log(`Thank you for your business ${name.toUpperCase()}`)
}

function isSnakeEyes(n1, n2) {
    if (n1 == n2) {
        console.log("Snake eyes!")
    }
    else {
        console.log("NOT snake eyes!")
    }
}

console.log("EXAMPLE 3")
let number = parseInt(prompt("Enter a number: "))
let dbnumber = doublenumber(number)
function doublenumber(n) {
    return n * 2
}

function printresult(number, dbnumber) {
    console.log(`The double of number ${number} is ${dbnumber}`)
}
printresult(number, dbnumber)



console.log("EXERCISE")
function checkName(username) {
    console.log(username)
}

function checkName(username) {
    if (username === null || username === '') {
        username = prompt("You forgot to enter a name. Enter a name again: ");
    }
    if (!isNaN(username)) {
        username = prompt(`${username} is invalid! Enter a name again: `);
    }

    while (!isNaN(username) || username === null || username === '') {
        username = prompt("Your input was not in the required format. Enter a valid username: ");
    }

    let uppercase = username.toUpperCase();
    console.log(`Welcome to the class, ${uppercase}`);
}

let u = prompt("Enter a username: ");
checkName(u);

console.log("THURSDAY, SEP 12")
console.log("EXAMPLE 1: array in functions")

function lastelement(inputarray) {
    if (inputarray === undefined) {
        return null
    } else if (inputarray.length !== 0) {
        let lastindex = inputarray.length - 1
        return inputarray[lastindex]
    } else {
        return null
    }
}

console.log("EXAMPLE 2: builtin functions")
let pinumber = Math.PI
console.log(`PI = ${pinumber}`)
console.log(`PI ceil = ${Math.ceil(pinumber)}`)
console.log(`PI floor = ${Math.floor(pinumber)}`)
console.log(`2^3 = ${Math.pow(2,3)}`)
console.log(`Random number ${Math.random()}`)
console.log(`Random number ${Math.floor(Math.random()*10)}`)
console.log(`Random number ${Math.floor(Math.random()*15+5)}`)

console.log("EXAMPLE 3: random item")
function pickacolor(listcolors) {
    let lastindex = listcolors.length - 1
    let indexrandomcolor = Math.floor(Math.random() * lastindex)
    return listcolors[indexrandomcolor]
}

console.log("EXAMPLE 4")
const addition = function(n1,n2) {
    return n1+n2
}

let squared = function(num) {
    return Math.pow(num,2)
}

console.log("EXAMPLE 5")
let greet = function(username) {
    console.log(`Welcome to function in JS ${username}`)
}

console.log("EXAMPLE 6")
const rolldice = (rolltime=1) => {
    for (let n = 1; n<=rolltime; n++) {
        console.log(Math.floor(Math.random()*5+1))
    }
}

console.log("EXAMPLE 7")
const findmax = function(listnumbers) {
    return Math.max(...listnumbers)
}