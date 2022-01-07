
const generateTeam = (team) => {
    const createManagerCard = (manager) => {
        return `
        <section class="employee-card">
            <div class="card-header">
            <h2><i class="fas fa-mug-hot"> </i>${manager.name}</h2>
            <h3>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
            <h4>Email: <a href="mailto:${manager.email}">${manager.email}</a></h4>
            <h4>Office Number: ${manager.officeNumber}</h4>
            </div>
        </section>
        `
    }

    const createEngineerCard = (engineer) => {
        return `
        <section class="employee-card">
            <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
            <h4>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h4>
            <h4>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</h4>
            </div>
        </section>
        `
    }

    const createInternCard = (intern) => {
        return `
        <section class="employee-card">
            <div class="card-header">
            <h2>${intern.name}</h2>
            <h3>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
            <h4>Email: <a href="mailto:${intern.email}">${intern.email}</a></h4>
            <h4>Github: ${intern.school}</h4>
            </div>
        </section>
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
    <link rel="stylesheet" href="./src/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100&display=swap" rel="stylesheet">
    <title>My Team</title>
</head>

<body>
    <div class="header-card">
        <h1>My Team</h1>
    </div>
    <div>
        ${generateTeam(team)}
    </div>
</body>
</html>
    `;
};