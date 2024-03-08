const shapes = require('./shapes.js')


class circle extends shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return '<circle cx="90" cy="40" r="60" fill="${this.shapeColor}" text="${this.text}" textColor="${this.textColor}" />'
     };
    };

module.exports = circle;