const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Susie', '4', 'susie@work.com', 'TTU');

    expect(intern.name).toBe('Susie');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('susie@work.com');
    expect(intern.school).toBe('TTU');
});