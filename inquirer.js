var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./profile.html', 'utf8')
var inquirer = require("inquirer");
var generateHTML = require("./generateHTML")
var axios = require("axios")


inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your user-name?"
    },
    {
        type: "checkbox",
        message: "What color would you like for your background?",
        name: "stack",
        choices: [
            "green",
            "blue",
            "pink",
            "red"
        ]
    },


]).then(function (userInput) {


    var options = { format: 'Letter' };

    // axios call to the github api  (using the user variable)
    var queryUrl = "https://api.github.com/users/" + userInput.username
    var color = userInput.stack[0]
    axios.get(queryUrl).then(function (result) {
        // call to getneraate html
        // then you create the pdf
        var data = { color, ...result.data }
        html = generateHTML(data)
        console.log(html)
        pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
            if (err) return console.log(err);
            // console.log(res); { filename: '/app/businesscard.pdf' }
        });

        // var githubUserName = userInput.username;
        // console.log(githubUserName)

        // var color = userInput.stack[0];
        // console.log(color)
    })
})