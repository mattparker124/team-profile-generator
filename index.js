const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile } = require('./utils/generate-site');

let entriesTable = [];
let pageHTML = '';

const promptStart = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: `What is your Manager's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: `Enter your Manager's ID`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a vaild ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: `Enter your Manager's email address`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `Enter your Manager's office number`,
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter a valid entry for office!');
                    return false;
                }
            }
        },
    ])
    .then(({ managerName, managerId, managerEmail, officeNumber }) => {
        this.manager = new Manager(managerName, managerId, managerEmail, officeNumber);
        entriesTable.push(this.manager);
    })
};

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Is this entry for an engineer or an intern?',
            choices: ["Engineer", "Intern"],
        },
        {
            type: 'input',
            name: 'name',
            message: `What is your employee's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter your employee's ID`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a vaild ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter your employee's email address`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
    ])
    .then(({ employeeType, name, id, email }) => {
        if (employeeType === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: `Enter your employee's github URL`,
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter a valid github!');
                            return false;
                        }
                    }
                },
            ])
            .then(({ github }) => {
                this.employee = new Engineer(name, id, email, github);
                entriesTable.push(this.employee);
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'anotherEmployee',
                        message: 'Would you like to add another employee?',
                        default: false,
                    },
                ])
                .then(({anotherEmployee}) => {
                    if (anotherEmployee) {
                        return promptUser();
                    } else {
                        pageHTML = generatePage(entriesTable);
                        writeFile(pageHTML);
                    }
                })
            })
        } else if (employeeType === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: `Enter your employee's school`,
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter a valid school!');
                            return false;
                        }
                    }
                },
            ])
            .then(({ school }) => {
                this.employee = new Intern(name, id, email, school);
                entriesTable.push(this.employee);
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'anotherEmployee',
                        message: 'Would you like to add another employee?',
                        default: false,
                    },
                ])
                .then(({anotherEmployee}) => {
                    if (anotherEmployee) {
                        return promptUser();
                    } else {
                        pageHTML = generatePage(entriesTable);
                        writeFile(pageHTML);
                    }
                })
            })
        }
    })
}

promptStart()
    .then(promptUser)