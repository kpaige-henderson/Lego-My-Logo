const shapes = require('./shapes.js')


class square extends shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return '<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="10" y="10" rx="20" ry="20" fillfill="${this.shapeColor}" /><text x="90" y="110" fill="${this.textColor}">${this.text} font-size="35"</text></svg>'
     };
    };

module.exports = square;