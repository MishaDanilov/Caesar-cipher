const { Command } = require('commander');
const caesarCipher = require('./caesarCipher')

const program = new Command();
program
    .requiredOption('-s, --shift <number>', 'shift of caesor cipher', parseInt)
    .requiredOption('-a, --action <type>', 'action of caesor cipher')
    .option('-i, --input <type>', 'input of caesor cipher')
    .option('-o, --output <type>', 'output of caesor cipher')
program.parse();
const options = program.opts();
if (options.input === undefined&&options.output === undefined) caesarCipher(options, true)
else caesarCipher(options, false)
