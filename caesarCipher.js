const stream = require('stream')
const fs = require('fs');
const path = require('path')
const shift = require('./shift')
module.exports = function (options,isEmpty){
    if(options.action=='encode') options.shift = options.shift
    else if(options.action=='decode') {
        options.shift = -1*options.shift
        options.input = isEmpty?'./output.txt':options.input
        options.output = isEmpty?'./plain.txt':options.output
    }
    else return console.error(new Error('Error: invalid format'))
    const input = path.join(__dirname, options.input?options.input:'./input.txt')
    const output = path.join(__dirname, options.output?options.output:'./output.txt')
    stream.pipeline(
        fs.createReadStream(input),
        async function* (source) {
            source.setEncoding('utf8');
            for await (const chunk of source) {
                yield shift(chunk,options.shift)
            }
        },
        fs.createWriteStream(output),
        (error) => {
            if (error) console.log(error)
            else console.log(`${options.action.substring(0, options.action.length - 1)}ing completed`)
        }
    )
}