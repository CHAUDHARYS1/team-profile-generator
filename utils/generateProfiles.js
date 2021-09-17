function employeeCard(employee) {

    var cardContainer = ``;
    for (let i = 1; i < employee.length; i++) {
        cardContainer += `<div>
       <div class="uk-card uk-card-default uk-card-hover">
           <div class="uk-card-header">
               <div class="uk-grid-small uk-flex-middle" uk-grid>
                   <div class="uk-width-expand">
                       <h3 class="uk-card-title uk-margin-remove-bottom">${employee[i].employeeName}</h3>
                       <p class="uk-text-meta uk-margin-remove-top">${employee[i].employeePosition}</p>
                   </div>
                   <div class="uk-width-auto">
                       <div class="uk-card-badge uk-label">Length: ${employee[i].employeeService}+ yrs</div>
                   </div>
               </div>
           </div>
           <div class="uk-card-body">
               <p class="uk-text-bold">ID: <span class="uk-text-normal">${employee[i].employeeId}</span></p>
               <p class="uk-text-bold">Email: <span class="uk-text-normal"><a href="mailto:${employee[i].employeeEmail}">${employee[i].employeeEmail}</a></span></p>
               <p class="uk-text-bold">Phone Number: <span class="uk-text-normal">${employee[i].employeePhone}</span></p>
               <p class="uk-text-bold">School: <span class="uk-text-normal">${employee[i].employeeSchool}</span></p>
               <p class="uk-text-bold">Github: <span class="uk-text-normal"><a href="https://github.com/${employee[i].employeeGithub} target="_blank:">${employee[i].employeeGithub}</a></span></p>
           </div>
       </div>
    </div>`

    }
    console.log(cardContainer);
    return cardContainer;
}


// TODO: Create a function to generate index.html
function generateProfiles(employee) {
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
            <h1 class="uk-heading-medium uk-text-lead uk-text-center uk-text-white">${employee[0].teamName}</h1>
        </div>
        <br>

        <div class="uk-container">
            <div class="uk-child-width-1-3 uk-grid">
                <div>
                    <div class="uk-card uk-card-primary uk-card-hover">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">${employee[0].managerName}</h3>
                                    <p class="uk-text-meta uk-margin-remove-top">Team Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body">
                            <p class="uk-text-bold">ID: <span class="uk-text-normal">${employee[0].managerEmployeeId}</span></p>
                            <p class="uk-text-bold">Email: <span class="uk-text-normal"><a href="mailto:${employee[0].managerEmail}">${employee[0].managerEmail}</a></span></p>
                            <p class="uk-text-bold">Phone Number: <span class="uk-text-normal">${employee[0].managerOfficeNumber}</span></p>
                        </div>
                    </div>
                </div>
                
                ${employeeCard(employee)}

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