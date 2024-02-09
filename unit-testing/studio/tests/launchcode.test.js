const launchCode = require("../index.js");

describe("Testing launchCode object properties", () => {
  test('checks if organization value is "nonprofit"', () => {
    expect(launchCode.organization).toBe("nonprofit");
  });

  test('checks if executiveDirector value is "Jeff"', () => {
    expect(launchCode.executiveDirector).toBe("Jeff");
  });

  test("checks if percentageCoolEmployees value is 100", () => {
    expect(launchCode.percentageCoolEmployees).toBe(100);
  });

  test("programsOffered contains Web Development", () => {
    expect(launchCode.programsOffered).toContain("Web Development");
  });

  test("programsOffered contains Data Analysis", () => {
    expect(launchCode.programsOffered).toContain("Data Analysis");
  });

  test("programsOffered contains Liftoff", () => {
    expect(launchCode.programsOffered).toContain("Liftoff");
  });

  test("programsOffered has exactly 3 programs", () => {
    expect(launchCode.programsOffered.length).toBe(3);
  });

  describe("launchOutput function tests", () => {
    test('returns "Launch!" when passed a number only divisible by 2', () => {
      expect(launchCode.launchOutput(4)).toBe("Launch!");
    });

    test('returns "Code!" when passed a number only divisible by 3', () => {
      expect(launchCode.launchOutput(9)).toBe("Code!");
    });

    test('returns "Rocks!" when passed a number only divisible by 5', () => {
      expect(launchCode.launchOutput(25)).toBe("Rocks!");
    });

    test('returns "LaunchCode!" when passed a number divisible by 2 and 3', () => {
      expect(launchCode.launchOutput(6)).toBe("LaunchCode!");
    });

    test('returns "Code Rocks!" when passed a number divisible by 3 and 5', () => {
      expect(launchCode.launchOutput(15)).toBe("Code Rocks!");
    });

    test('returns "Launch Rocks!" when passed a number divisible by 2 and 5', () => {
      expect(launchCode.launchOutput(10)).toBe("Launch Rocks!");
    });

    test('returns "LaunchCode Rocks!" when passed a number divisible by 2, 3, and 5', () => {
      expect(launchCode.launchOutput(30)).toBe("LaunchCode Rocks!");
    });

    test('returns "Rutabagas! That doesn\'t work." when passed a number not divisible by 2, 3, or 5', () => {
      expect(launchCode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
    });
  });
});
