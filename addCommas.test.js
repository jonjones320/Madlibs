const addCommas = require("./addCommas");


describe("#addCommas", () => {

  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  
  test("it creates strings", () => {
    expect(typeof addCommas(1234)).toBe("string");
  });
  test("it creates strings", () => {
    expect(typeof addCommas(1000000)).toBe("string");
  });
  test("it creates strings", () => {
    expect(typeof addCommas(9876543210)).toBe("string");
  });
  test("it creates strings", () => {
    expect(typeof addCommas(6)).toBe("string");
  });
  test("it creates strings", () => {
    expect(typeof addCommas(-10)).toBe("string");
  });
  test("it creates strings", () => {
    expect(typeof addCommas(-5678)).toBe("string");
  });


  test("it adds commas correctly", () => {
    expect(addCommas(1234)).toBe("1,234");
  });
  test("it adds commas correctly", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });
  test("it adds commas correctly", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });
  test("it adds commas correctly", () => {
    expect(addCommas(6)).toBe("6");
  });
  test("it adds commas correctly", () => {
    expect(addCommas(-10)).toBe("-10");
  });
  test("it adds commas correctly", () => {
    expect(addCommas(-5678)).toBe("-5,678");
  });

});
