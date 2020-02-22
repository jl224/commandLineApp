const axios = require("axios");

var queryUrl = "https://api.github.com/users/jl224"

axios.get(queryUrl).then(function (result) {

    var pic = result.data.avatar_url
    var name = result.data.name
    var followers = result.data.followers
    var folowing = result.data.following
    var location = result.data.location
    var bio = result.data.bio
    var blog = result.data.blog
    var githubURL = result.data.url
    // console.log(result)
    // console.log(result.data.avatar_url)
    // console.log(pic)
    // console.log(name)
    // console.log(followers)
    // console.log(location)
    // console.log(bio)
    // console.log(blog)
    //console.log(url)



})


// function AxiosGet(url, callback) {

//     // Do some stuff to get some api information
//     var futureData = apicall(url)
//     // Run the callback with data received
//     callback(futureData)
// }