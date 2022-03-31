stringLength = (string) => {
    const len = string.length;
    if (len > 1 && len <= 10) {
      return len;
    } else {
      throw new Error("string is greater than 10 characters");
    }
  };
  
  const reverseString = str => str.split('').reverse().join('')
  
  capitalize = (string) => {
    const strArray = [...string];
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join("");
  };
  
  class Calculator {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    add() {
      return this.num1 + this.num2;
    }
  
    subtract() {
      return this.num1 - this.num2;
    }
  
    multiply() {
      return this.num1 * this.num2;
    }
  
    divide() {
      return this.num1 / this.num2;
    }
  
    capitalize(string) {
      return string.toUpperCase();
    }
  }
  
  module.exports = { stringLength, reverseString, capitalize, Calculator };