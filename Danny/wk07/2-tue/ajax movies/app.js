
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
  var $response = $(".response")

  $.ajax(setting).done(function(movies) {
    $("#movie-results").html("")
    if (movies.Response == "False") {
      $("#movie-results").append($("<li>" + "Not Found" + "</li>"))
    } else {
      movies.Search.forEach(function(movie) {
        var source = $('#movie-result-template').html()
        var template = Handlebars.compile(source)
        $response.append(template(movie))
      })
    }
  })
})
