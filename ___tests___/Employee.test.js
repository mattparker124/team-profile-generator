const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jeff', '1', 'jeff@work.com');

    expect(employee.name).toBe('Jeff');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jeff@work.com');
});

test('getName() gets the name of an employee', () => {
    const employee = new Employee('Jeff', '1', 'jeff@work.com');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('getId() gets the id of an employee', () => {
    const employee = new Employee('Jeff', '1', 'jeff@work.com');
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test('getEmail() gets the email of an employee', () => {
    const employee = new Employee('Jeff', '1', 'jeff@work.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('getRole() returns Employee', () => {
    const employee = new Employee('Jeff', '1', 'jeff@work.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})