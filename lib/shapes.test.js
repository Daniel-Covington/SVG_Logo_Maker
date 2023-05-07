const { Triangle, Circle, Square } = require('./shapes');

test('Triangle should render correctly', () => {
  const triangle = new Triangle('blue');
  expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle should render correctly', () => {
  const circle = new Circle('red');
  expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square should render correctly', () => {
  const square = new Square('green');
  expect(square.render()).toBe('<rect x="60" y="60" width="180" height="180" fill="green" />');
});