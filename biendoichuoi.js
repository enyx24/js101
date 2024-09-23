const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

function check(a, b) {
    if (a.length !== b.length) {
        return "NO";
    }

    let dicta = {};

    for (let i = 0; i < a.length; i++) {
        if (!dicta[a[i]]) {
            dicta[a[i]] = [];
        }
    }

    for (let i = 0; i < a.length; i++) {
        dicta[a[i]].push(i);
    }

    for (let j = 0; j < b.length; j++) {
        let flag = false;
        if (!(b[j] in dicta)) {
            return "NO";
        }
        for (let i of dicta[b[j]]) {
            if (Math.abs(i - j + 1) % 2 === 1) {
                dicta[b[j]] = dicta[b[j]].filter(index => index !== i);
                flag = true;
                break;
            }
        }
        if (!flag) {
            return "NO";
        }
    }
    return "YES";
}


function solve(n, input) {
    for (let i = 0; i < 2 * n; i += 2) {
        console.log(check(input[i], input[i + 1]));
    }
    return;
}

n = 0;
input = [];

rl.on('line', function (line) {
    if (n == 0)
        n = parseInt(line);
    else {
        input.push(line);
        if (2 * n == input.length) {
            solve(n, input);
        }
    }
})