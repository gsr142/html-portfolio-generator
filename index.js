const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter your location',
            name: 'location'
        },
        {
            type: 'input',
            message: 'Enter a summary about yourself',
            name: 'bio'
        },
        {
            type: 'input',
            message: 'Enter your LinkedIn URL',
            name: 'linkedin'
        },
        {
            type: 'input',
            message: 'Enter your GitHub URL',
            name: 'github'
        },
    ]);