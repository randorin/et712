/*
Betsy Zhang
Sep 17, Objects
*/
console.log("Betsy Zhang")
console.log("\n ------ Example 1: defining an object ------")
// create an object named 'car'
const car ={
    type: "Fiat",
    model: 500,
    color: "white"
}
console.log(`The model of the car is ${car.model}`)

console.log("\n ------ Example 2: use of 'this' keyword in an object ------")
// create an object named 'person'
const person = {
    // defining properties
    firstname : "John",
    lastname : "Doe",
    id : 1234,

    //defining methods
    fullname : function(){
        return `${this.firstname} ${this.lastname}`
    }
}

// accessing method 'fullname'
console.log(person.fullname())

console.log("\n ------ Example 3: object construcctor using function ------")
function course(title, instructor, code, session, students){
    this.title = title;
    this.instructor = instructor;
    this.code = code,
    this.session = session,
    this.students = students
}
// set up values to the object
let course1 = new course("Javascript programming", "Wu", "ET712", "H1", 12)

// acessing properties
console.log(`The course ${course1.title} has ${course1.students} students`)

console.log("\n ------ Example 4: methods ------")
const myMath = {
    //defining methods
    square : function(num){
        return num*num
    },
    double : function (num){
        return num*2
    }
}

let n = 3
let number1 = myMath.double(n)
let number2 = myMath.square(n)

console.log(`The double of number ${n} is ${number1}`)
console.log(`The square of ${n} is ${number2}`)
// -------------------------------------------
console.log("\n ------ Exercise ------")
let mycalculator = {
    message: "Area and Volume",
    side: 2,
    
    area_square: function() {
        return this.side * this.side;
    },
    
    volume_cube: function() {
        return this.side * this.side * this.side;
    }
};

console.log(mycalculator.message)
console.log(`Area = ${mycalculator.area_square()}`)
console.log(`Volume = ${mycalculator.volume_cube()}`)

/**
 * SEP 19. 2024
 * try-catch
 */
console.log("\n---- EXAMPLE 1: TRY-CATCH ---- ")
// define a function to display a message in upper-case
function yell(message) {
    console.log(message.toUpperCase().repeat(3))
}

try {
//call the function
yell(" Good morning ")
yell(123)
} catch (e) {
    console.log(`ERROR! ${e}`)
} finally {
    console.log("end of calling function yell()")
}
// after example
console.log("\n ------ lines after example 1 ------ \n")

console.log("\n---- EXERCISE ---- ")

let a = parseInt(prompt("Enter a number: "))
let b = parseInt(prompt("Enter another number to divide by: "))

function divideNumbers() {
    try {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Error performing the division");
        } else {
        console.log(a / b)
        }
    } catch(e) {
        console.log(`${e}`)
    }
}