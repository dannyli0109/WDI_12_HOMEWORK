module.exports = {
  new: function(req,res) {
    compliments.push(req.body.compliment)
    res.redirect("/")
  }
}
