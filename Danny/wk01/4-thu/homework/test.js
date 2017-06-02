var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
var glenWaverlyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
var whateverLine = ["Richmond", "Melbourne Central", "Burnley", "Glenferrie"]


var trainLines = [alameinLine, glenWaverlyLine, sandringhamLine, whateverLine]

// to check if there are possible ways to get there
function haveDestination(origin, destination, lineArrays) {
  var originLine = []
  var destinationLine = []
  var outputTrainLineArray = []
  var exchangeStations = []
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

    for (var i = 0; i < originLine.length; i ++) {
      for (var j = 0; j < destinationLine.length; j ++) {
        if (originLine[i] === destinationLine[j]) {
          exchangeStations.push(originLine[i])
        }
      }
    }
    outputTrainLineArray = [originLine, destinationLine, exchangeStations]
    console.log(exchangeStations);
    return outputTrainLineArray
  }
  return false
}



function routeInfo(origin, destination, linesToTravel, exchange) {
  var returnString = ""
  var count = 0
  if (linesToTravel.length == 1) {
    var originIndex = linesToTravel[0].indexOf(origin, 0)
    var destinationIndex = linesToTravel[0].indexOf(destination, 0)

    if (originIndex > destinationIndex) {
      linesToTravel[0].reverse()
      originIndex = linesToTravel[0].indexOf(origin, 0)
      destinationIndex = linesToTravel[0].indexOf(destination, 0)
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
    var originIndex = linesToTravel[0].indexOf(origin, 0)
    var richmondIndex = linesToTravel[0].indexOf(exchange, 0)

    if (originIndex > richmondIndex) {
      linesToTravel[0].reverse()
      originIndex = linesToTravel[0].indexOf(origin, 0);
      richmondIndex = linesToTravel[0].indexOf(exchange, 0);
    }

    for(var index = originIndex; index <= richmondIndex; index ++) {
      returnString += linesToTravel[0][index] + " -----> "
      count ++;
    }

    var destinationIndex = linesToTravel[1].indexOf(destination, 0)
    richmondIndex = linesToTravel[1].indexOf(exchange, 0)

    if (richmondIndex > destinationIndex) {
      linesToTravel[1].reverse();
      destinationIndex = linesToTravel[1].indexOf(destination, 0);
      richmondIndex = linesToTravel[1].indexOf(exchange, 0);
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
  return [returnString, count - 1]
}

// need to pass the have destination test to continue
var userOrigin = prompt("Please eneter your origin")
var userDestination = prompt("Please enter your destination")
var linesToTravel = haveDestination(userOrigin, userDestination, trainLines);
while (linesToTravel === false) {
  userOrigin = prompt("Please enter your origin again")
  userDestination = prompt("Please enter your destination again")
  linesToTravel = haveDestination(userOrigin, userDestination, trainLines);
}

console.log("origin: " + userOrigin);
console.log("destination: " + userDestination);
console.log("");
if (linesToTravel[2]) {
  var stationsToExchange = linesToTravel[2]
  var minRouteStop = 9999;
  var minRoute
  for (var i = 0; i < stationsToExchange.length; i++) {
    var outputRoute = routeInfo(userOrigin, userDestination, linesToTravel, stationsToExchange[i])
    console.log(outputRoute[0]);
    if (minRouteStop > outputRoute[1]) {
      minRouteStop = outputRoute[1]
      minRoute =  outputRoute
    }
    console.log(outputRoute[1] + " stops total")
    console.log("");
  }
  console.log("Best route: " + minRoute[0]);
  console.log(minRoute[1] + " stops total");
}
