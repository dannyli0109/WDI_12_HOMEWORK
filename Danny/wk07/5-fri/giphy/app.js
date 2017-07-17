var times = 0
$('#search-btn').on("click", function(event) {
  event.preventDefault()
  $(".response").html("")
  searchGif()
})


var searchGif = function() {
  var apiKey = "a21cda551bb24c179a7e0968ae1a34a0"
  var baseUrl = 'https://api.giphy.com/v1/gifs/search?'
  var searchString = $('#search-input').val()

  var setting = {
    url: baseUrl,
    data: {
      q: searchString,
      apiKey: apiKey,
      limit: 10,
      offset: times,
      rating: "G",
      lang: "en"
    }
  }

  var $response = $(".response")

  $.ajax(setting).done(function(response) {
      response.data.forEach(function(gifs) {
        var source = $('#gif-result-template').html()
        var template = Handlebars.compile(source)
        $response.append(template(gifs.images.fixed_width))
      })
  })
}


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        times += 10;
        searchGif();
    }
};
