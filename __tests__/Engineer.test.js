const Engineer = require('../lib/Engineer');
test("Checking engineers data", () => {
    let engineer = new Engineer("Kevin", 1, "kevin@gmail.com", "zomora");
    expect(engineer.getName()).toBe("Kevin");
    expect(engineer.getGithub()).toBe("zomora");
    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.getEmail()).toBe("kevin@gmail.com");
});