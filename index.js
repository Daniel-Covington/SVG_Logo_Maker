const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Please enter no more than three characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or a hexadecimal number for the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or a hexadecimal number for the shape color:',
  },
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  let shapeObject;

  switch (shape) {
    case 'Triangle':
      shapeObject = new Triangle(text, textColor);
      shapeObject.setColor(shapeColor);
      break;
    case 'Circle':
      shapeObject = new Circle(text, textColor);
      shapeObject.setColor(shapeColor);
      break;
    case 'Square':
      shapeObject = new Square(text, textColor);
      shapeObject.setColor(shapeColor);
      break;
  }

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
      ${shapeObject.render()}
    </svg>
  `;

  fs.writeFile('logo.svg', svgContent.trim(), err => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Generated logo.svg');
  });
});