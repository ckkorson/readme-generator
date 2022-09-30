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
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select what type of license you would like for this project',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC']
    }
])
.then((data) => {
    fs.writeFile('README.md',
    `# ${data.projectName}
    \n## Description
    \n${data.description}
    \n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    \n## Table of Contents
    \n- [Installation Instructions](#installation-instructions)
    \n- [Usage](#usage)
    \n- [Contributing](#contributing)
    \n- [Tests](#tests)
    \n- [Questions](#questions)
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