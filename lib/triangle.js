const shapes = require('./shapes.js')


class triangle extends shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
            return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" style="fill:${this.shapeColor}" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
         };
        };

module.exports = triangle;