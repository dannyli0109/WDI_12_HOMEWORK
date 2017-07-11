
$('#search-btn').on("click", function(event) {
  event.preventDefault()
  var baseUrl = 'http://omdbapi.com/'
  var searchString = $('#search-input').val()
  var apiKey = "2f6435d9"
  var setting = {
    url: baseUrl,
    data: {
      s: searchString,
      apiKey: apiKey
    }
  }
  // debugger
  $.ajax(setting).done(function(movies) {
    $("#movie-results").html("")
    if (movies.Response == "False") {
      $("#movie-results").append($("<li>" + "Not Found" + "</li>"))
    } else {
      movies.Search.forEach(function(movie) {
        var link = 'http://www.imdb.com/title/' + movie.imdbID
        $("#movie-results").append($("<li>" + "<a href='" + link + "'>" + movie.Title + "</a>" + "</li>"))
      })
    }
  })
})
