// Array exercise
// 1
var days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log("Question1: ", days_of_the_week);
console.log("");

// 2
days_of_the_week.unshift(days_of_the_week.pop())
console.log("Question2: ",days_of_the_week);
console.log("");


// 3
var weekdaysAndWeekend = [days_of_the_week.splice(1, 5), days_of_the_week]
console.log("Question3: ", weekdaysAndWeekend)
console.log("");


// 4
weekdaysAndWeekend.pop();
console.log("removing weekends", weekdaysAndWeekend);
weekdaysAndWeekend[0].sort();
console.log("Question4: ", weekdaysAndWeekend[0])
console.log("");


// Object exercise
// The Recipe Card
var recipe = {
  title: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
}
console.log(recipe.title);
console.log("Serves: " + recipe.serves);
console.log("Ingredients: ");
// for (var index = 0; index < recipe.ingredients.length; index ++) {
//   console.log(recipe.ingredients[index]);
// }
console.log(recipe.ingredients.join("\n"))
console.log("");


// The reading list
var bookList = []
var book1 = {
  title: "All the list we cannot see",
  author: "Anthony Doerr",
  alreadyRead: false
}

var book2 = {
  title: "The book of thief",
  author: "Markus Zusak",
  alreadyRead: true
}

var book3 = {
  title: "The girl on the train",
  author: "Paula Hawkins",
  alreadyRead: false
}
bookList.push(book1, book2, book3)

for (var index = 0; index < bookList.length; index++) {
  var returnString = ""
  if (bookList[index].alreadyRead) {
    returnString += "You already read "
  } else {
    returnString += "You still need to read "
  }

  returnString += ('"' + bookList[index].title + '" by ' + bookList[index].author)
  console.log(returnString);
}
console.log("");


// The movie database
var movie1 = {
  title: "The Shawshank Redenption",
  duration: 142,
  stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
}

var movie2 = {
  title: "The Godfather",
  duration: 174,
  stars: ["Marlon Brando", "Al Pacino", "James Caan"]
}

function logMovieInfomation(movie) {
  var returnString = "";
  returnString += movie.title + " lasts for " + movie.duration + " minutes. Stars: "
  for (var index = 0; index < movie.stars.length; index ++) {
    returnString += movie.stars[index]
    if (index != (movie.stars.length -1)) {
      returnString += ", "
    } else {
      returnString += "."
    }
  }
  console.log(returnString);
}

logMovieInfomation(movie1)
logMovieInfomation(movie2)
