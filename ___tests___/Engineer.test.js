const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('John', '3', 'john@work.com', 'https://github.com/mattparker124');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('john@work.com');
    expect(engineer.github).toBe('https://github.com/mattparker124');
})