const shapes = require('./shapes.js')


class square extends shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return '<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" text="${this.text}" textColor="${this.textColor}" />'
     };
    };

module.exports = square;