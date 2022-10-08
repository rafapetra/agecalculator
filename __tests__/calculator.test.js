import Calculator from '../src/calculator.js';

describe('Calculator', () => {

  test('should correctly create an user object with user age and age expectancy', () => {
    const calculator = new Calculator(25,79);
    expect(calculator.userAge).toEqual(25);
    expect(calculator.userAgeExpectancy).toEqual(79);
  });

  test('should correctly multiply the user age by .24', () => {
    const newUser = new Calculator(25,79);
    expect(newUser.inMercury()).toEqual(6);
  });

  test('should correctly multiply the user age by .62', () => {
    const newUser = new Calculator(25,79);
    expect(newUser.inVenus()).toEqual(15.5);
  });

  test('should correctly multiply the user age by 1.88', () => {
    const newUser = new Calculator(25,79);
    expect(newUser.inMars()).toEqual(47);
  });

  test('should correctly multiply the user age by 11.86', () => {
    const newUser = new Calculator(25,79);
    expect(newUser.inJupiter()).toEqual(296.5);
  });

  test('should subtract the user age from the user age expectancy if age is higher', () => {
    const newUser = new Calculator(25,79);
    expect(newUser.yearsLeft()).toEqual(54);
  });
});