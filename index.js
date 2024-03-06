const fs = require('fs');
const inquirer = require('inquirer');
const generateShape = require('./generateShape.js');
const colors = require('./lib/colors.js')

//prompt questions for logo
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What 3 or less characters would you like displayed in your logo?',
        validate: function (answer) {
            if(answer.length <= 3){
                return true;
            }
            if(answer.length > 3) {
                return console.log("\n Text must be 3 characters or less")
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color for your text: ',
        choices: [colors],
        validate: function (answer) {
            if(answer.textColorChoice === colors) {
                return true;
            }
            return console.log("\n Please enter a valid color");
        },
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a shape color:',
        choices: [colors],
        when:function (answer) {
            if(answer.shapeColorChoice === 'colors') {
                return true;
            }
            return console.log("\n Please enter a valid color");
        },
    }

];

const file = "logo.svg"

function logoMaker(response) {
    const svg = generateShape(response);
    fs.writeFile(file, svg, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        logoMaker(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init();