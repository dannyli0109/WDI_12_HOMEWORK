// 1
var h1 = document.querySelector('ul h1')


// 2
h1.textContent = "Friend"

// 3
var divButton = document.querySelector("div button")

divButton.addEventListener("click", function(){
  document.querySelector("html").style.backgroundColor = "red"
})


// 4
var favouriteColor = document.querySelector("#favCol").value


// 5
var myArticles = document.querySelector(".my-articles")

var p = document.createElement("p")
myArticles.appendChild(p)

// 6
var count = document.querySelectorAll("ul li").length

// 7
var list = document.querySelector(".lucky-numbers")
var btn = document.querySelector("button")

btn.addEventListener("click", function() {
  var listItem = document.createElement("li")
  listItem.textContent = Math.round(Math.random() * 100)
  list.appendChild(listItem)
})
