var inquirer = require("inquirer");
var fs = require('fs');

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

]).then(function (userInput) {

    var githubUserName = userInput.username;
    console.log(githubUserName)

    var color = userInput.stack[0];
    console.log(color)
});
