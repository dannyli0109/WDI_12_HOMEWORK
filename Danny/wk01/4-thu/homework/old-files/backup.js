// adding a node to the graph
function addNode(node) {
  mapGraph.nodes.push(node)
  mapGraph.edges[mapGraph.nodes.indexOf(node, 0)] = [];
  return mapGraph
}

// adding edges to the graph
function addEdge(node1, node2) {
  mapGraph.edges[mapGraph.nodes.indexOf(node1, 0)].push(node2)
  mapGraph.edges[mapGraph.nodes.indexOf(node2, 0)].push(node1)
}

// getStationObject
function getStationObject(stationName) {
  var index = mapGraph.nodes.findIndex(element => element.name === stationName)
  if (index){
    return mapGraph.nodes[index]
  }
    return false
}

// get path from one node to another
function pathFromTo(origin, destination) {
  var queue = [];
  queue.push(origin)
  var visited = [];
  visited[origin] = true
  var paths = [];
  var steps = 0
  while (queue.length > 0) {
    var node = queue.shift();
    var index = mapGraph.nodes.indexOf(node, 0)

    // travel through the edges of the current node

    for (var i = 0; i < mapGraph.edges[index].length; i++) {
      // to check if the node have been visited
      debugger
      if (visited[index][i] == false){
        visited[index][i] = true
        queue.push(mapGraph.edges[index][i]);
        paths.push(node)
        // steps ++;
        // console.log(paths);
      }
    }
  }

  return paths
}










// test
var flindersStreet = {
  name: "Flinders Street",
  zones: [1],
  lines: ["City Loop"],
}

var parliament = {
  name: "Parliament",
  zones: [1],
  lines: ["City Loop"]
}

var southernCross = {
  name: "Southern Cross",
  zones: [1],
  lines: ["City Loop"]
}

var flagStaff = {
  name: "FlagStaff",
  zones: [1],
  lines: ["City Loop"]
}

var melbourneCentral = {
  name: "Melbourne Central",
  zones: [1],
  lines: ["City Loop"]
}

addNode(flindersStreet)
addNode(parliament)
addNode(southernCross)
addNode(flagStaff)
addNode(melbourneCentral)

addEdge(flindersStreet, parliament)
addEdge(flindersStreet, southernCross)
addEdge(southernCross, flagStaff)
addEdge(melbourneCentral, flagStaff)
addEdge(parliament, melbourneCentral)
console.log(pathFromTo(flindersStreet, melbourneCentral));
