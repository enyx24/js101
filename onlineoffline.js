const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

let online = new Map();
let out = "";
let cmd, val = "";

rl.on('line', function (line) {
    if (line != '0') {
        [cmd, val] = line.split(' ');
        if (cmd == '1') {
            online.set(val, 1);
        }
        else if (cmd == '3') {
            online.set(val, 0);
        }
        else if (cmd == '2') {
            if (online.get(val) == 1)
                out += "1\n";
            else
                out += "0\n";
        }
    }
    else {
        console.log(out);
        return;
    }
})