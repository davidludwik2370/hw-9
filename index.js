const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (answers) => `
  # ${answers.project}
  
  ## License: ${answers.license}

  ## Description:

  ${answers.description}

  ## Table of Contents: 

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation: 

  To install necessary dependencies, run the following command:

  \`\`\`
  ${answers.dependencies}
  \`\`\`

  ## Usage: 

  ${answers.use}

  ## License: 

  This project is licensed under the ${answers.license} license.

  ## Contributing: 

  ${answers.contribute}

  ## Tests: 

  To run tests, run the following command:

  \`\`\`
  ${answers.tests}
  \`\`\`

  ## Questions:

  If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.username}](https://github.com/${answers.username}/).`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub user name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is your project\'s name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'None'],
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
      default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'use',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  .then((res) => {
    // console.log(res);
    fs.writeFile('README.md', generateReadme(res), (err) =>
      err ? console.log(err) : console.log('Generating README...')
    );
  });
