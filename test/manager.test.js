const Manager = require('../lib/Manager');
test('creates an Manager object', () => {
    const manager = new Manager('Evan', 90, 'evand1998@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
test('gets role of employee', () => {
    const manager = new Manager('Evan', 90, 'evand1998@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 