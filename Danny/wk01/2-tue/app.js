// even/odd
for (var num = 0; num <= 20; num ++) {
  if (num % 2 == 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}

// multiplication tables
for (var first = 1; first <= 10; first ++) {
  var returnString = "";
  for (var second = 1; second <= 10; second ++) {
    returnString += "[" + (first * second) + "]"
  }
  console.log(returnString);
}


// you top choices
var colors = ["blue", "red", "green", "yellow", "brown", "gray", "gold", "silver", "light gray", "megenta"];

for (var i = 0; i < 20; i++) {
  colors.push("random");
}

for (var i = 0; i < colors.length; i++) {
  var returnString = "My " + (i + 1);
  var sNum = (i + 1).toString();
  var lastDigit = sNum.charAt(sNum.length - 1);
  var secondLastDigit = sNum.charAt(sNum.length - 2)

  if (lastDigit == 1 && secondLastDigit != 1) {
    returnString += "st "
  } else if (lastDigit == 2 && secondLastDigit != 1) {
    returnString += "nd "
  } else if (lastDigit == 3 && secondLastDigit != 1) {
    returnString += "rd "
  } else {
    returnString += "th "
  }
  returnString += "choice is " + colors[i];
  console.log(returnString);
}


// years
var year = 2018
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

if (year === currentYear) {
  console.log("I'm in the present!");
} else if (year > currentYear) {
  console.log("Greetings from the future");
} else {
  console.log("Whoa! Blast from the past!");
}
