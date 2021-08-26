// TODO: Create a function to generate index.html
function generateProfiles(data) {
    return `
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/style.css">
    <!-- UIKit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/css/uikit.min.css" />
    <title>Team Profile</title>
    </head>
    <body>
        <div class="uk-container uk-background-primary uk-padding">
        <h1 class="uk-heading-medium uk-text-lead uk-text-center uk-text-white">${data.mainTitle}</h1>
        </div>

    <div class="uk-container">        
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data.employeeName}</h3>
                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">${data.employeePosition}</time></p>
                    </div>
                    <div class="uk-width-expand">
                       <p>Years in service: ${data.employeeService}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p class="uk-text-bold">ID: <span class="uk-text-normal">${data.assignedId}</span></p>
                <p class="uk-text-bold">Email: <span class="uk-text-normal">${data.employeeEmail}</span></p>
                <p class="uk-text-bold">Phone Number: <span class="uk-text-normal">${data.employeePhone}</span></p>
                <p class="uk-text-bold">School: <span class="uk-text-normal">${data.employeeSchool}</span></p>
                <p class="uk-text-bold">Github: <span class="uk-text-normal">${data.employeeGithub}</span></p>
            </div>
        </div>
    </div>
    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/js/uikit-icons.min.js"></script>
    </body>
    </html>
  `;
}

module.exports = generateProfiles;