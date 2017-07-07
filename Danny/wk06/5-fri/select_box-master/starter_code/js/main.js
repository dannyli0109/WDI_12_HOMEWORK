var cities = [["NYC","nyc"], ["SF","sf"], ["LA","la"], ["ATX","austin"], ["SYD","sydney"]];

var selectItemDom = document.querySelector("#city-type")
var bodyDom = document.querySelector("body")

for (var i = 0; i < cities.length; i++) {
  var option = document.createElement("option");
  option.text = cities[i][0]
  selectItemDom.add(option)
}

selectItemDom.addEventListener("change", function(e) {
  index = e.currentTarget.selectedIndex
  if (index == 0) {
    bodyDom.className = ""
  } else {
    bodyDom.className = cities[index-1][1]

  }
})
