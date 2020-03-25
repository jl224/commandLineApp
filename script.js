const questions = [{
    message: "Enter your GitHub username:",
    name: "username"
},
{
    message2: "Enter the color you would like for your background:",
    background: "color"
}];

function writeToFile(fileName, data) {

}

function init() {
    init();

    const fs = require("fs");
    const axios = require("axios");
    const inquirer = require("inquirer");
    //const HTMLToPDF = require('html-to-pdf');

    //Questions for User Profile
    inquirer.prompt[]

        //API Call to GitHub for Specifics
        .then(function ({ username }) {
            const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

            axios.get(queryUrl).then(function (res) {
                const repoNames = res.data.map(function (repo) {
                    return repo.name;
                });

                const repoNamesStr = repoNames.join("\n");

                fs.writeFile("profile.pdf", repoNamesStr, function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log(`Saved ${repoNames.length} repos`);
                });
            });
        })