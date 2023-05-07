const { Triangle, Circle, Square } = require('./shapes');

test('Triangle should render correctly', () => {
  const triangle = new Triangle('SVG', 'white');
  triangle.setColor('blue');
  const expectedTriangleOutput = `<polygon points="150,18 244,182 56,182" fill="blue" />\n<text x="150" y="140" text-anchor="middle" alignment-baseline="central" font-family="sans-serif" font-size="48" fill="white">SVG</text>`;
  expect(triangle.render()).toBe(expectedTriangleOutput);
});

test('Circle should render correctly', () => {
  const circle = new Circle('SVG', 'white');
  circle.setColor('red');
  const expectedCircleOutput = `<circle cx="150" cy="100" r="80" fill="red" />\n<text x="150" y="100" text-anchor="middle" alignment-baseline="central" font-family="sans-serif" font-size="48" fill="white">SVG</text>`;
  expect(circle.render()).toBe(expectedCircleOutput);
});

test('Square should render correctly', () => {
  const square = new Square('SVG', 'white');
  square.setColor('green');
  const expectedSquareOutput = `<rect x="60" y="20" width="180" height="180" fill="green" />\n<text x="150" y="100" text-anchor="middle" alignment-baseline="central" font-family="sans-serif" font-size="48" fill="white">SVG</text>`;
  expect(square.render()).toBe(expectedSquareOutput);
});