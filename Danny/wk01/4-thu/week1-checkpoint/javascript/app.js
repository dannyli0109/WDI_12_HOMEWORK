// JS Variables
// 1
var captain = "Jack"
// 2
var phrase = "Oh " + captain + " my " + captain + "!"

// JS Conditionals
var souls = 3;
var liftRafts = 2;

if (souls > liftRafts) {
  console.log("SOS!");
}

// Data Structure - JS Arrays
// 1
var weekend = ["Saturday"]

// 2
weekend.push("Sunday")

// 3
weekend.unshift("Friday")

// 4
var day = weekend[1]

// 5
weekend.shift()


// Data Sturcture - JS Objects
// 1
var brain = {
  energyLevel: 10
}

// 2
var energy = 10
brain.energyLevel = energy

// 3
brain.dream = "electric sheep"

// JS Function
// 1
var rectArea = function(length, width) {
  return length * width
}

// 2
var myRectArea = rectArea(3,4)
