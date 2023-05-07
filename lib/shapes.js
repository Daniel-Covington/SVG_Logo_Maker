class Shape {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  renderText() {
    const x = 150;
    const y = 100;
    return `<text x="${x}" y="${y}" text-anchor="middle" alignment-baseline="central" font-family="sans-serif" font-size="48" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  setColor(color) {
    this.color = color;
  }

  render() {
    const triangle = `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    const y = 140; 
    const text = `<text x="150" y="${y}" text-anchor="middle" alignment-baseline="central" font-family="sans-serif" font-size="48" fill="${this.textColor}">${this.text}</text>`;
    return `${triangle}\n${text}`;
  }
}

class Circle extends Shape {
  setColor(color) {
    this.color = color;
  }

  render() {
    const circle = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    return `${circle}\n${this.renderText()}`;
  }
}

class Square extends Shape {
  setColor(color) {
    this.color = color;
  }

  render() {
    const square = `<rect x="60" y="20" width="180" height="180" fill="${this.color}" />`;
    return `${square}\n${this.renderText()}`;
  }
}
  
  module.exports = { Triangle, Circle, Square };