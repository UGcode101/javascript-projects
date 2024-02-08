const checkFive = require("./checkFive");

describe("checkFive Function", () => {
  test("returns 'num is less than 5.' when num < 5", () => {
    const output = checkFive(2);
    expect(output).toBe("2 is less than 5.");
  });

  test("returns 'num is greater than 5.' when num > 5", () => {
    const result = checkFive(6);
    expect(result).toBe("6 is greater than 5.");
  });

  test("returns 'num is equal to 5.' when num = 5", () => {
    const result = checkFive(5);
    expect(result).toBe("5 is equal to 5.");
  });
});
