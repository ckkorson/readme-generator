const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt ([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter any installation instructions.'
    }
])
.then((data) => {
    fs.writeFile('README.md',
    `# ${projectName}
    ## Installation Instructions
    ${installation}`
    )
})