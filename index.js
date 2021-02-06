#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require("cli-welcome");
const chalk = require("chalk");
const sym = require('log-symbols');

const log = console.log;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const GithubClr = chalk.hex(`#6cc644`).bold.inverse;
const linkedInClr = chalk.hex(`#0077b5`).bold.inverse;
const gameClr = chalk.hex(`#6937ff`).bold.inverse;
const dim = chalk.dim;
const italic = chalk.italic;

welcome({
    title: `Arvind Singh`,
    tagLine: `Howdy, nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
   
})

log(`

${gameClr(` Arvind Singh `)}

${italic(`DevOps Automation Enginner. My Motto: "Learn 📖 , Break 💢 and Implement 🧰".
Talk to me about : Kubernetes, Docker , Nginx, Nagios, Test Automation`)}

🤝${dim.italic.bold(`Reach me at :`)}

 ${twitterClr(` Twitter `)}  ${dim(`https://twitter.com/0xArvind`)}
 ${GithubClr(` Github `)}   ${dim(`https://github.com/ari1988`)}
 ${linkedInClr(` LinkedIn `)} ${dim(`https://www.linkedin.com/in/arvindsingh88/`)}
 ${gameClr(` Game `)}     ${dim(`https://ari1988.github.io/`)}

`);