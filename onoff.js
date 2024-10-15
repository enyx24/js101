const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

let online = new Set();
let out = "";

rl.on('line', function (line) {
    if (line == '0') {
        console.log(out);
        return;
    }
    let cmd = line[0] - '0';
    let val = 0;
    for (let i = 2; i < line.length; i++) {
        val = val * 10 + (line[i] - '0');
    }
    if (cmd === 1) {
        online.add(val);
    } else if (cmd === 3) {
        online.delete(val);
    } else if (cmd === 2) {
        if (online.has(val)) {
            out += "1\n";
        } else {
            out += "0\n";
        }
    }
})
