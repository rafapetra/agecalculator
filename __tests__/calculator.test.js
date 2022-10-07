import Calculator from '../src/calculator.js';

describe('Calculator', () => {

  test('should correctly create an user object with user age and age expectancy', () => {
    const calculator = new Calculator(25,79);
    expect(calculator.userAge).toEqual(25);
    expect(calculator.userAgeExpectancy).toEqual(79);
  });

  test('should correctly multiply the user age by .24', () => {
    const newUser = new Calculator(25,79);
    expect(newUser.userAge.inMercury()).toEqual(6);
  });
});