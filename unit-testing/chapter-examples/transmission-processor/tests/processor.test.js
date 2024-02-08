const processor = require("../processor.js");

describe("transmission processor", function () {
  test("converts id to a number", function () {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  });

  test("takes a string returns an object", function () {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("returns -1 if '::' not found", function () {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function () {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test("returns rawData in object", () => {
    let result = processor("9701::<487297403495720912>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 for rawData if missing < at position 0", function () {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
  });
});

describe("transmission processor tests for rawData format", function () {
  test("returns -1 for rawData if missing < at the beginning", function () {
    let result = processor("9701::8729740349572>0912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if '<' is not at the beginning", function () {
    let result = processor("9701::4872<97403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if missing < entirely", function () {
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if multiple '<' present but not at beginning", function () {
    let result = processor("9701::<487297403495<720912>");
    expect(result.rawData).toBe(-1);
  });

  describe("transmission processor edge cases", function () {
    test("returns -1 if more than one '::' is found", function () {
      let result = processor("9701:::<489584872710>");
      expect(result).toBe(-1);
    });

    test("returns -1 for rawData if it contains non-digit characters", function () {
      let result = processor("9701::<48a9584872710>");
      expect(result.rawData).toBe(-1);
    });

    test("returns -1 if id part cannot be converted to a number", function () {
      let result = processor("97a1::<489584872710>");
      expect(result).toBe(-1);
    });

    test("returns -1 if rawData is empty", function () {
      let result = processor("9701::<>");
      expect(result.rawData).toBe(-1);
    });

    test("handles valid transmission with only digits in rawData", function () {
      let result = processor("9701::<1234567890>");
      expect(result).toEqual({ id: 9701, rawData: "1234567890" });
    });

    test("handles whitespace around transmission correctly", function () {
      let result = processor("  9701  ::<  1234567890  >  ");
      expect(result).toEqual({ id: 9701, rawData: "1234567890" });
    });
  });
});
