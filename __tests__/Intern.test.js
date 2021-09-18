const Intern = require('../lib/Intern');

test("gets intern's data", () => {
    let intern = new Intern ("Kathleen", 3, "kathleen@gmail.com", "DeVry");
    expect(intern.getName()).toBe("Kathleen");
    expect(intern.getEmail()).toBe("kathleen@gmail.com");
    expect(intern.getRole()).toBe("Intern");
    expect(intern.getSchool()).toBe("DeVry");

});