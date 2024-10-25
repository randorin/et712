/*
    Betsy Zhang
    Sep 5, loops
*/
console.log("Betsy Zhang")
console.log("\n ----- Example 1: loops -----")

for (let n = 0; n < 5; n++) {
    console.log(`counter = ${n}`)
}
console.log("\n----- Example 2: decrememnt for loop")
for (let m = 9; m>0; m--) {
    console.log(`decrement of m = ${m}`)
}

console.log("\n ----- Example 3 -----")
let number = 8
for (number; number>0; number--) {
    console.log(`number = ${number}`)
}

for (number; number > 0; number--) {
    if (number%2===0) {
        console.log(`number = ${number}`)
    }
}

console.log("\n example 4")
let colors = ['maganta', 'pink', 'green', 'olive']
for (let index = 0; index<colors.length;index++) {
    console.log(`color ${index} = ${colors[index]}`)
}

for (let index of colors) {
    console.log(index)
}

console.log("\n example 5")
let index = 0
while (index<=3) {
    console.log(`index = ${index}`)
    index++
}
console.log("example 6")
const SECRET = 8
let guessnumber = parseInt(prompt("Guess a number between 0 and 10"))

while (guessnumber !== SECRET) {
    guessnumber = parseInt(prompt("Wrong number! Guess again! "))
}
console.log(`${guessnumber} is the right number!`)

console.log("example 7")
let n;
while (true) {
    n = parseInt(prompt("Enter a non-negative number: "))
    if (n<0) {
        break
    }
}
console.log(`The last number was ${n}`)

console.log("example 8")
let m = 10
while (m > 0) {
    m--
    if (m===6) {
        continue
    }
    console.log(`m = ${m}`)
}

console.log("====== EXERCISE ======")
/*
Activity description:  Use a for loop to append item to a colors array. Given the following list:

let colors = ['red']

The program should ask the user to enter the number of items to be added to colors array. The number of items must be between 1 and 5. 

After it, use a for loop to append or add one item at the time to the colors array. 
*/
for (const SECRET = 5481; SECRET > 0; SECRET++) {
    let answer = parseInt(prompt("Enter your 4 digit pin: "))
    if (answer === SECRET) {
        console.log("You pin number is correct")
        break
    } else if (answer !== SECRET) {
        console.log("Account is locked!")
        break
    }
}