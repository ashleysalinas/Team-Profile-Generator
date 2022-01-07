
const generateTeam = (team) => {
    const createManagerCard = (manager) => {
        return `
        <div class="employee-card">
            <div class="card-header">
            <h2>${manager.name}</h2>
            <h3>${manager.getRole}</h3>
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
            <h3>${engineer.getRole}</h3>
            </div>
            <div class="card-body">
            <h4>Email:${engineer.email}</h4>
            <h4>Github: ${engin.github}</h4>
            </div>
        </div>
        `
    }
}