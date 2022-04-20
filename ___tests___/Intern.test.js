const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Susie', '4', 'susie@work.com', 'TTU');

    expect(intern.name).toBe('Susie');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('susie@work.com');
    expect(intern.school).toBe('TTU');
});

test('getRole() returns Intern', () => {
    const intern = new Intern('Susie', '4', 'susie@work.com', 'TTU');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test('getSchool() returns school', () => {
    const intern = new Intern('Susie', '4', 'susie@work.com', 'TTU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});