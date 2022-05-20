const calculateGrade = require("../grade");

test("Calculate Grade", () => {
    expect(calculateGrade(49)).toBe("F");
});
test("Calculate Grade", () => {
    expect(calculateGrade(50)).toBe("D");
});
test("Calculate Grade", () => {
    expect(calculateGrade(69)).toBe("C");
});
test("Calculate Grade", () => {
    expect(calculateGrade(79)).toBe("B");
});
test("Calculate Grade", () => {
    expect(calculateGrade(80)).toBe("A");
});
