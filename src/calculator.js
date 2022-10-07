export default class Calculator {
  constructor(age, expectedAge){
    this.userAge = age;
    this.userAgeExpectancy = expectedAge;
  }

  inMercury = function() {
  return this.userAge * .24;
}

  inVenus = function() {
}
}
