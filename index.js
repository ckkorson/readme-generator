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
        name: 'description',
        message: 'Enter a description of you project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter any installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any testing information.'
    }
])
.then((data) => {
    fs.writeFile('README.md',
    `# ${data.projectName}
    \n## Description
    ${data.description}
    \n## Table of Contents
    \n[Installation Instructions](#installation-instructions)
    \n[Usage](#usage)
    \n[Contributing](#contributing)
    \n[Tests](#tests)
    \n## Installation Instructions
    ${data.installation}
    \n## Usage
    ${data.usage}
    \n## Contributing
    ${data.contribution}
    \n## Tests
    ${data.tests}`, 
    (err) => err ? console.log(err) : console.log('README.md created!')
    )
})