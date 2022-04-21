const generateCards = entriesArr => {
    return `
    <section>
        <div class="flex-row justify-space-between">
        ${entriesArr
        .filter(({ role }) => role === 'Manager')
        .map(({ name, id, email, role, officeNumber }) => {
            return `<div class="manager">
                <h3>${name}</h3>
                <h3>Employee ID: ${id}</h3>
                <h3>Role: ${role}</h3>
                <a href = "mailto: ${email}">Send Email</a>
                <h3>Office Number: ${officeNumber}</h3>
        </p>`
        })
        .join('')}
        ${entriesArr
        .filter(({ role }) => role === 'Engineer')
        .map(({ name, id, email, role, github }) => {
            return `<div class="engineer">
                <h3>${name}</h3>
                <h3>Employee ID: ${id}</h3>
                <h3>Role: ${role}</h3>
                <a href = "mailto: ${email}">Send Email</a>
                <a href = "${github}" target="_blank">GitHub</a>
        </p>`
        })
        .join('')}
        ${entriesArr
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, role, school }) => {
                return `<div class="intern">
                    <h3>${name}</h3>
                    <h3>Employee ID: ${id}</h3>
                    <h3>Role: ${role}</h3>
                    <a href = "mailto: ${email}">Send Email</a>
                    <h3>School: ${school}</h3>
            </div>`
            })
            .join('')}
            </div>
        </section>
    `
}

module.exports = templateData => {
    return (`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header class="jumbotron">
            <h1 class="display-3">Team Profile Generator</h1>
            <p class="lead">A simple app for displaying your team's information</p>
        </header>
        <div class="container">
            ${generateCards(templateData)}
        </div>
    </body>
    </html>
  `)
}