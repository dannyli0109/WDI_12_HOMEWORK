var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
var glenWaverlyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahan", "Windsor"]

var trainLines = [alameinLine, glenWaverlyLine, sandringhamLine]

// to check if there are possible ways to get there
function haveDestination(origin, destination, lineArrays) {
  var originLine = []
  var destinationLine = []
  var outputTrainLineArray = []
  for (var i = 0; i < lineArrays.length; i++) {
    if (lineArrays[i].some(x => x === origin) && lineArrays[i].some(x => x === destination)) {
      return [lineArrays[i]]
    } else {
      if (lineArrays[i].some(x => x === origin)) {
        originLine = lineArrays[i]
      }

      if (lineArrays[i].some(x => x === destination)) {
        destinationLine = lineArrays[i]
      }
    }

  }
  if (originLine.length > 0 && destinationLine.length > 0) {
    outputTrainLineArray = [originLine, destinationLine]
    return outputTrainLineArray
  }
  return false

}


// need to pass the have destination test to continue
var userOrigin = prompt("Please eneter your origin")
var userDestination = prompt("Please enter your destination")
var linesToTravel = haveDestination(userOrigin, userDestination, trainLines);
console.log(linesToTravel);
while (linesToTravel === false) {
  userOrigin = prompt("Please enter your origin again")
  userDestination = prompt("Please enter your destination again")
  linesToTravel = haveDestination(userOrigin, userDestination, trainLines);
  console.log(linesToTravel);
}
var returnString = ""
console.log("origin: " + userOrigin);
console.log("destination: " + userDestination);
var count = 0
if (linesToTravel.length == 1) {
  var originIndex = linesToTravel[0].indexOf(userOrigin, 0)
  var destinationIndex = linesToTravel[0].indexOf(userDestination, 0)

  if (originIndex > destinationIndex) {
    linesToTravel[0].reverse()
    originIndex = linesToTravel[0].indexOf(userOrigin, 0)
    destinationIndex = linesToTravel[0].indexOf(userDestination, 0)
  }
    for(var index = originIndex; index <= destinationIndex; index ++) {
      if (index != destinationIndex) {
        returnString += linesToTravel[0][index] + " -----> "
        count ++;
      } else {
        returnString += linesToTravel[0][index]
        count ++;
      }
    }
  } else {
    // get to richmond first
    var originIndex = linesToTravel[0].indexOf(userOrigin, 0)

    var richmondIndex = linesToTravel[0].indexOf("Richmond", 0)

    if (originIndex > richmondIndex) {
      linesToTravel[0].reverse()
      originIndex = linesToTravel[0].indexOf(userOrigin, 0);
      richmondIndex = linesToTravel[0].indexOf("Richmond", 0);
    }

    for(var index = originIndex; index <= richmondIndex; index ++) {
        returnString += linesToTravel[0][index] + " -----> "
        count ++;
    }

    var destinationIndex = linesToTravel[1].indexOf(userDestination, 0)

    if (richmondIndex > destinationIndex) {
      linesToTravel[1].reverse()
      destinationIndex = linesToTravel[1].indexOf(userDestination, 0);
      richmondIndex = linesToTravel[1].indexOf("Richmond", 0);
    }

    for(var index = richmondIndex + 1; index <= destinationIndex; index ++) {
      if (index != destinationIndex) {
        returnString += linesToTravel[1][index] + " -----> "
        count++;
      } else {
        returnString += linesToTravel[1][index]
        count++;
      }

    }
  }
console.log(returnString);
console.log((count - 1) + " stops total")
