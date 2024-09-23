const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

let online = new Set();
let out = "";

rl.on('line', function (line) {
    if (line != '0') {
        [cmd, val] = line.split(' ');
        if (cmd == '1')
            online.add(val);
        else
            if (online.has(val))
                out += "1\n";
            else
                out += "0\n";
    }
    else {
        console.log(out);
        return;
    }
})