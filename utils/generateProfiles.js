function employeeCard(employee) {

    var cardContainer = ``;
    for (let i = 1; i < employee.length; i++) {
        cardContainer += `<div>
       <div class="uk-card uk-card-default uk-card-hover">
           <div class="uk-card-header">
               <div class="uk-grid-small uk-flex-middle" uk-grid>
                   <div class="uk-width-expand">
                       <h3 class="uk-card-title uk-margin-remove-bottom">${employee[i].getName()}</h3>
                       <p class="uk-text-meta uk-margin-remove-top">${employee[i].getRole()}</p>
                   </div>
                  
               </div>
           </div>
           <div class="uk-card-body">
               <p class="uk-text-bold">ID: <span class="uk-text-normal">${employee[i].getId()}</span></p>
               <p class="uk-text-bold">Email: <span class="uk-text-normal"><a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></span></p>
                ${employee[i].getGithub() ?  `<p class="uk-text-bold">Github: <span class="uk-text-normal">${employee[i].getGithub()}</span></p>` : ''}
                ${employee[i].getSchool() ?  `<p class="uk-text-bold">School: <span class="uk-text-normal">${employee[i].getSchool()}</span></p>` : ''}
           </div>
       </div>
        </div>`

    }
    return cardContainer;
}


// TODO: Create a function to generate index.html
function generateProfiles(employee, team) {

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
            <h1 class="uk-heading-medium" style="color:white;">${team[0].getTeamName()}</h1> 
            <p style="color:white;">${team[0].getTeamDesc()}</p> 
        </div>
        <br>

        <div class="uk-container">
            <div class="uk-child-width-1-3 uk-grid">
                <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">${employee[0].getName()}</h3>
                                    <p class="uk-text-meta uk-margin-remove-top">Team Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body">
                            <p class="uk-text-bold">ID: <span class="uk-text-normal">${employee[0].getId()}</span></p>
                            <p class="uk-text-bold">Email: <span class="uk-text-normal"><a href="mailto:${employee[0].getEmail()}">${employee[0].getEmail()}</a></span></p>
                            <p class="uk-text-bold">Office Number: <span class="uk-text-normal">${employee[0].getOfficeNumber()}</span></p>
                        </div>
                    </div>
                </div>
                
                ${employeeCard(employee)}

            </div>
        </div>

        <footer class="uk-container uk-position-relative">
        <div class="uk-flex">
            <div class="uk-margin-left footer-content">
                <p>Built with love by Shital Chaudhary | 2021</p>
            </div>
            <div class="uk-margin-left footer-content">
                <p><a href="https://github.com/CHAUDHARYS1/team-profile-generator" target="_blank"></span><u>See code in
                            GitHub</u></a> <span uk-icon="github"></span></p>
            </div>
            <div class="uk-margin-left footer-content">
                <p>Team Profile Generator Web App <span uk-icon="happy"></span></p> </span>
            </div>
        </div>
    </footer>
    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/js/uikit-icons.min.js"></script>
    </body>
    </html>
  `;
}

module.exports = generateProfiles;