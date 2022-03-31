const lib = require("./jestPractice.js");

test("gets length of a string", () => {
  expect(lib.stringLength("bag")).toBe(3);
  expect(lib.stringLength("greatness")).toBe(9);
  expect(() => lib.stringLength("ajnidwunc9noweec")).toThrow(Error);
});

test("reverse string", () => {
  expect(lib.reverseString("bag")).toBe("gab");
});

test("Capitalize string", () => {
  expect(lib.capitalize("bag")).toBe("Bag");
  expect(lib.capitalize("remit")).toBe("Remit");
});

describe("Calculator", () => {
  const calculator = new lib.Calculator(5, 5);
  test("add", () => {
    expect(calculator.add()).toBe(10);
  });

  test("subtract", () => {
    expect(calculator.subtract()).toBe(0);
  });

  test("multiply", () => {
    expect(calculator.multiply()).toBe(25);
  });

  test("divide", () => {
    expect(calculator.divide()).toBe(1);
  });

  test("capitalize", () => {
    expect(calculator.capitalize("bag")).toBe("BAG");
  });
});