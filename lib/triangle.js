const shapes = require('./shapes.js')


class triangle extends shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
            return '<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" style="fill: ${this.shapeColor}; font-size: 20px; fill: ${this.textColor};" />'
         };
        };

module.exports = triangle;