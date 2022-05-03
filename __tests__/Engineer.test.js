const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "AlexAksonenko";
    const employeeInstance = new Engineer("Alex", 2, "aksenenkos@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "AlexAksonenko";
    const employeeInstance = new Engineer("Alex", 2, "aksenenkos@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Alex", 2, "aksenenkos@gmail.com", "AlexAksonenko");
    expect(employeeInstance.getRole()).toBe(returnValue);
});