/*You are given the following variables:

const music = "Duran Duran"
const oldWay = "Mom!!" + "Where is my Sony Walkman that has " + music ".";

Declare a new variable called "newWay" that converts the above "oldWay" using a
template literal. (The output for newWay and oldWay should be the same)˚
*/

const music = "Duran Duran"
const newWay = `Mom!! Where is my Sony Walkman that has ${music}.`

console.log(newWay)


//Given the following if/else statement, write a ternary.

const color = "red";
// if (color === "red") { console.log ("Happy Lunar New Year!!"); } else { console.log("Colors are cool!"); }

const doTernary = (color === 'red') ? console.log('Happy Lunar New Year') : console.log('Colors are cool!')

/*
Here is an array:
const yummies = ["apple", "blueberry", "cantaloupe",  "dates"]

 Write the code to generate an array that looks like ["dates","apple","blueberry"]

Use any of the array methods, such as pop(), push(), unshift() and shift()
*/

function redoArray ( arr ){
    newArr = []

    newArr.push(arr.pop())
    newArr.push(arr.shift())
    newArr.push(arr[0])

    return newArr
}

const yummies = ["apple", "blueberry", "cantaloupe",  "dates"]

console.log(redoArray(yummies))


/*
Write a function that runs through each item in an array of vegetables and returns each one. (hint: loops) 
Console.log your results. 

let vegetableArray = ["zucchini", "carrot", "lettuce", "potato"]

// paste from your code editor
*/

function arrIteration(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    
}

const vegetableArray = ["zucchini", "carrot", "lettuce", "potato"]
arrIteration(vegetableArray)


// return daisy from array below
const flowers = [ ["gardenia", "daisy", "rose" ], ["green", "red", "blue"] ]

console.log(flowers[0][1])