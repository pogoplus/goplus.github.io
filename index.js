const FS = require('fs')

const numbers = FS.readFileSync('numbers.txt').toString().split(/\r\n/)

const participantes = 333
const base = 999 / participantes

let output = ''

for (let i = 0; i < numbers.length; i += base) {
    let row = '<tr>\r\n'
    row += `\t<td>C${((i+base)/base).toString().padStart(3, 0)}</td>\r\n`
    row += `\t<td></td>\r\n\t`
    for (let j = 0; j < base; j++) {   
        row += `<td>${numbers[i + j]}</td>`
    }
    row += '\r\n</tr>'
    output += row +'\r\n'
}

FS.writeFileSync('output.txt', output)
