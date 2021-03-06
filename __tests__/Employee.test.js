const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Alex";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Alex", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "aksenenkos@gmail.com";
    const employeeInstance = new Employee("Alex", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Kaha Kaladze";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 3;
    const employeeInstance = new Employee("Kaha Kaladze", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "kaladze@akstech.com";
    const employeeInstance = new Employee("Kaha Kaladze", 3, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Kaha Kaladze", 3, "kaladze@akstech.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})

