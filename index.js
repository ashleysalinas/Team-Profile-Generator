const inquirer = require('inquirer');
const fs = require("fs");
//import classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const teamMembers = [] //empty array later populated by answers
const render = require('./src/page-template')


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
            default: true,
        },
    ]).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
        teamMembers.push(manager)
        if (answers.managerContinue == true) {
            addAnEmployee()
        } else {
            console.log("Generating page now")
            buildTeam()
        }
    })

    function addAnEmployee() {
        inquirer.prompt([
            {
                name: 'employeeType',
                message: 'What type of employee would you like to add?',
                type: 'list',
                choices: ['Add an Engineer', 'Add an Intern', 'Exit']
            }
        ]).then((answers) => {
            switch(answers.employeeType) {
                case 'Add an Engineer':
                    addAnEngineer();
                    break;
                case 'Add an Intern':
                    addAnIntern();
                    break;
                case 'Exit':
                        console.log('Generating page now')
                        buildTeam()
                        break;
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
            const engineer = new Engineer(answers.engineerName, answers.EngineerID, answers.engineerEmail, answers.engineerGithub)
            teamMembers.push(engineer)
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
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
            teamMembers.push(intern)
            console.log("New intern added!")
            addAnEmployee()
        })
    }

    function buildTeam() {
        fs.writeFileSync("newPage.html",render(teamMembers)); //adds new file to base directory
        console.log('Type "open newPage.html" to see your generated page!')
    }
}

mainMenu();