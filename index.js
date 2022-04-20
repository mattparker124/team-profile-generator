const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

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
    ]);
};

const promptUser = employeeListData => {
    if (!employeeListData.entries) {
        employeeListData.entries = [];
    }
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
        {
            type: 'confirm',
            name: 'anotherEmployee',
            message: 'Would you like to add another employee?',
            default: false,
        },
    ])
    .then(employeeData => {
        employeeListData.entries.push(employeeData);
        if (employeeData.anotherEmployee) {
            return promptUser(employeeListData);
        } else {
            return employeeListData;
        }
    })
}

promptStart()
    .then(promptUser)
    .then(employeeListData => {
        console.log(employeeListData);
    })