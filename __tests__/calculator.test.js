import Calculator from '../src/calculator.js';

describe('the Calculator and all its prototypes', () => {

  test('should correctly create an user object with age, gender and country', () => {
    const calculator = new Calculator(25,79);
    expect(triangle.userAge).toEqual(25);
    expect(triangle.userAgeExpectancy).toEqual(79);

  });
});