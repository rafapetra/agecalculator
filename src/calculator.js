export default class Calculator {
  constructor(age, expectedAge) {
    this.userAge = age;
    this.userAgeExpectancy = expectedAge;
  }

  inMercury() {
    return this.userAge * 0.24;
  }

  inVenus() {
    return this.userAge * 0.62;
  }

  inMars() {
    return this.userAge * 1.88;
  }

  inJupiter() {
    return this.userAge * 11.86;
  }

  yearsLeft() {
    if (this.userAge < this.userAgeExpectancy) {
      return this.userAgeExpectancy - this.userAge;
    } else if (this.userAge > this.userAgeExpectancy) {
      return this.userAge - this.userAgeExpectancy;
    }
  }
}
