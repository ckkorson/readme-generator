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
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
])
.then((data) => {
    fs.writeFile('README.md',
    `# ${data.projectName}
    \n## Description
    \n${data.description}
    \n## Table of Contents
    \n- [Installation Instructions](#installation-instructions)
    \n- [Usage](#usage)
    \n- [Contributing](#contributing)
    \n- [Tests](#tests)
    \n## Installation Instructions
    \n${data.installation}
    \n## Usage
    \n${data.usage}
    \n## Contributing
    \n${data.contribution}
    \n## Tests
    \n${data.tests}
    \n## Questions
    \n### Github Profile
    \n[${data.github}](https://github.com/${data.github})
    \n### Email
    \n${data.email}`, 
    (err) => err ? console.log(err) : console.log('README.md created!')
    )
})