const circle = require('./circle.js');
const triangle = require('./triangle.js');
const square = require('./square.js');

function generateShape(response) {

    if (response.shape === 'circle') {
        const selectedShape = new circle (response.shapeColor, response.text, response.textColor)
        return selectedShape.render()
    }

    if (response.shape === 'triangle') {
        const selectedShape = new triangle (response.shapeColor, response.text, response.textColor)
        return selectedShape.render()
    }

    if (response.shape === 'square') {
        const selectedShape = new square (response.shapeColor, response.text, response.textColor)
        return selectedShape.render()
    }
};

module.exports = generateShape;