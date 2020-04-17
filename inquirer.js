var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./profile.html', 'utf8')
var inquirer = require("inquirer");


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
            "Green",
            "Blue",
            "Pink",
            "Red"
        ]
    },

    {
        type: "checkbox",
        message: "What color would you like for your background?",
        name: "stack",
        choices: [
            "Green",
            "Blue",
            "Pink",
            "Red"
        ]
    },

]).then(function (userInput) {


    var options = { format: 'Letter' };

    pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
    });

    var githubUserName = userInput.username;
    console.log(githubUserName)

    var color = userInput.stack[0];
    console.log(color)
});
