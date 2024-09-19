/*
Betsy Zhang
August 29th - JS variables, string, and array
*/
console.log("This is my first JS code")
console.log("------ Example 1: variables ------")

let number = 3
let username = "PeterPan"
let gender = "F"
let num1 = -2.5
let password;
let city = null
let userchoice = true
let music = ""

console.log("The data type of variable 'num1' ", typeof(num1))
console.log("The data type of variable 'username' ", typeof(username))
console.log("The data type of variable 'password' ", typeof(password))
console.log("The data type of variable 'city' ", typeof(city))
console.log("The data type of variable 'music' ", typeof(music))
console.log("Double the 'number' value", number*2)
console.log("concatenate string and numbers by using + sign", username + num1)

console.log("------ Example 2: prompt function ------")

number = parseInt(prompt("Enter a number: "))
console.log("Entered number: " + number)
//number = ParseInt(number)

console.log(`Triple the entered number ${number} is ${number*3}`)

console.log("------ Example 3: string ------")
let fullname = 'Peter Pan'
console.log(`Index 4 has holds character ${fullname[4]}`)
console.log(`fullname has ${fullname.length} characters`)
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())

console.log(`Letter 'e' has index ${fullname.search('e')}`)

fullname = "     Peter Pan     "
fullname = fullname.trim()

console.log("----- Lab Exercise -----")
let word = prompt("Enter a word: ")
console.log(`The second letter of the word is: `,word[1])
console.log(`The length of the word '${word}' is ${word.length}.`)
console.log(`The word in all uppercase is ${word.toUpperCase()}`)
let extracted = word.slice(-2)
console.log(`The last two characters of the word are: ${extracted}`)