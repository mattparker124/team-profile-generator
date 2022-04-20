const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('John', '3', 'john@work.com', 'https://github.com/mattparker124');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('john@work.com');
    expect(engineer.github).toBe('https://github.com/mattparker124');
})

test('getRole() returns Engineer', () => {
    const engineer = new Engineer('John', '3', 'john@work.com', 'https://github.com/mattparker124');
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})

test('getGithub() returns Github URL', () => {
    const engineer = new Engineer('John', '3', 'john@work.com', 'https://github.com/mattparker124');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});