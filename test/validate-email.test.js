const validateEmail = require("../validate-email");

test("Email must be more than 5 characters", () => {
    expect(validateEmail("siansk@buzzfreeze.com", "testss")).toBe(true);
    expect(validateEmail("a@aaa", "testss")).toBe(false);
});
test("Email should end with .com", () => {
    expect(validateEmail("siansk@buzzfreeze.com", "testsss")).toBe(true);
    expect(validateEmail("siansk@buzzfreeze.net", "testsss")).toBe(false);
});
test("Email should have with @", () => {
    expect(validateEmail("siansk@buzzfreeze.com", "testsss")).toBe(true);
    expect(validateEmail("siansk$buzzfreeze.com", "testss")).toBe(false);
});
test("Email must be required", () => {
    expect(validateEmail("siansk@buzzfreeze.com", "testsss")).toBe(true);
    expect(validateEmail("", "testss")).toBe(false);
});
test("Password must be more 5 characters", () => {
    expect(validateEmail("siansk@buzzfreeze.com", "tesqqqs")).toBe(true);
    expect(validateEmail("siansk@buzzfreeze.com", "tess")).toBe(false);
});
test("Password must be required", () => {
    expect(validateEmail("siansk@buzzfreeze.com", "testsss")).toBe(true);
    expect(validateEmail("siansk@buzzfreeze.com", "")).toBe(false);
});
