const inquirer = require('inquirer')

function mainMenu() {
    console.log("Welcome to the Team Profile Generator!")
    inquirer.prompt([
        {
            name: 'managerName',
            message: "What is your manager's name",
            type: 'input',
        },
        {
            name: 'managerID',
            message: "What is your manager's ID",
            type: 'number',
        },
        {
            name: 'managerEmail',
            message: "What is your manager's email address?",
            type: 'input',
        },
        {
            name: 'managerOffice',
            message: "What is your manager's office number",
            type: 'number',
        },
        {
            name: 'managerContinue',
            message: "Would you like to add more team members?",
            type: 'confirm',
            //default: true,
        },
    ]).then((answers) => {
        if (answers.managerContinue == true) {
            addAnEmployee()
        } else (
            console.log("Goodbye!")
        )
    })

    function addAnEmployee() {
        inquirer.prompt([
            {
                name: 'employeeType',
                message: 'What type of employee would you like to add?',
                type: 'list',
                choices: ['Add an Engineer', 'Add an Intern']
            }
        ]).then((answers) => {
            if (answers.employeeType == "Add an Engineer") {
                addAnEngineer()
            }
            if (answers.employeeType == "Add an Intern") {
                addAnIntern()
            }
        })
    }

    function addAnEngineer() {
        inquirer.prompt([
            {name:'engineerName',
            message: "What is the engineer's name?",
            type: 'input'
            },
            {name:'engineerID',
            message: "What is the engineer's ID?",
            type: 'number'
            },
            {name:'engineerEmail',
            message: "What is the engineer's email?",
            type: 'input'
            },
            {name:'engineerGithub',
            message: "What is the engineer's Github username?",
            type: 'input'
            },
        ]).then((answers) => {
            console.log("New engineer added!")
            addAnEmployee()
        })
    }

    function addAnIntern() {
        inquirer.prompt([
            {name:'internName',
            message: "What is the intern's name?",
            type: 'input'
            },
            {name:'internID',
            message: "What is the intern's ID?",
            type: 'number'
            },
            {name:'internEmail',
            message: "What is the intern's email?",
            type: 'input'
            },
            {name:'internSchool',
            message: "What school does the intern attend?",
            type: 'input'
            },
        ]).then((answers) => {
            console.log("New intern added!")
            addAnEmployee()
        })
    }
}

mainMenu();