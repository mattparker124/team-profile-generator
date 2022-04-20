const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Mary', '2', 'mary@work.com', '37');

    expect(manager.name).toBe('Mary');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('mary@work.com');
    expect(manager.officeNumber).toBe('37');
});

test('getRole() returns Manager', () => {
    const manager = new Manager('Mary', '2', 'mary@work.com', '37');
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})