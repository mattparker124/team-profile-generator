const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jeff', '1', 'jeff@work.com');

    expect(employee.name).toBe('Jeff');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jeff@work.com');
})