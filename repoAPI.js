const axios = require("axios");

var queryURL = "https://api.github.com/users/jl224/repos?per_page=100"

axios.get(queryURL).then(function (result) {

    console.log(result)

})