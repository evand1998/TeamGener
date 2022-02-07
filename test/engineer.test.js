const Engineer = require('../lib/Engineer');
test('creates an Engineer object', () => {
    const engineer = new Engineer('Evan', 90, 'evand1998@gmail.com', 'evand1998');
    
    expect(engineer.github) .toEqual(expect.any(String));
});
test('gets engineer github value', () => {
    const engineer = new Engineer('Evan', 90, 'evand1998@gmail.com', 'evand1998');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test('gets role of employee', () => {
    const engineer = new Engineer('Evan', 90, 'evand1998@gmail', 'evand1998');

    expect(engineer.getRole()).toEqual("Engineer");
});