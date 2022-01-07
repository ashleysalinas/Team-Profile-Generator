
const generateTeam = (team) => {
    const createManagerCard = (manager) => {
        return `
        <div class="employee-card">
            <div class="card-header">
            <h2>${manager.name}</h2>
            <h3>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
            <h4>${manager.officeNumber}</h4>
            <h4>Email:${manager.email}</h4>
            </div>
        </div>
        `
    }

    const createEngineerCard = (engineer) => {
        return `
        <div class="employee-card">
            <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
            <h4>Email:${engineer.email}</h4>
            <h4>Github: ${engineer.github}</h4>
            </div>
        </div>
        `
    }

    const createInternCard = (intern) => {
        return `
        <div class="employee-card">
            <div class="card-header">
            <h2>${intern.name}</h2>
            <h3>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
            <h4>Email:${intern.email}</h4>
            <h4>Github: ${intern.school}</h4>
            </div>
        </div>
        `
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManagerCard(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineerCard(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createInternCard(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
</head>

<body>
    <div>
        <div>
            <div>
                <h1>My Team</h1>
            </div>
        </div>
    </div>
    <div>
        <div>
            <div>
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};