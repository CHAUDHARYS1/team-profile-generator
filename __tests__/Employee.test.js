const Employee = require('../lib/Employee');

test("checking employee's data", () => {
    let employee = new Employee('Shital', 1, 'shitalchau19@gmail.com')
    expect(employee.getName()).toBe("Shital");
    expect(employee.getRole()).toBe("Employee");
    expect(employee.getEmail()).toBe("shitalchau19@gmail.com");
});