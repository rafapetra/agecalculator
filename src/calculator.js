export default class Calculator {
  constructor(age, expectedAge){
    this.userAge = age;
    this.userAgeExpectancy = expectedAge;
  }

  inMercury = function() {
  return this.userAge * .24;
}

  inVenus = function() {
    return this.userAge * .62;
}

  inMars = function() {
  return this.userAge * 1.88;
}

  inJupiter = function() {
  return this.userAge * 11.86;
}

yearsLeft = function() {
  if ((this.userAge < this.userAgeExpectancy)) {
    return this.userAgeExpectancy - this.userAge;
  }
}
}





