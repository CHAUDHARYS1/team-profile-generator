const Manager = require('../lib/Manager');

test("gets manager data", () => {
    let manager = new Manager ("Nischal", 1, "nischal@gmail.com", 12);
    expect(manager.getName()).toBe("Nischal");
    expect(manager.getEmail()).toBe("nischal@gmail.com");
    expect(manager.getRole()).toBe("Manager");
    expect(manager.getOfficeNumber()).toBe(12);
});