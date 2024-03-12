const shapes = require('./shapes.js')


class triangle extends shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
            return '<svg height="210" width="400" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 75 160, 225 160" style="fill:${this.shapeColor}" /><text x="120" y="117" font-size="30" fill="${this.textColor}" "${this.text}"/></svg>'
         };
        };

module.exports = triangle;