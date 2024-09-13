const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

// let x, y, i, j = 0;
let input = [];
const dpm = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeap(x) {
    return ((x % 4 == 0) && (x % 100 != 0)) || (x % 400 == 0);
}

function solve([x, y, i, j]) {
    t = j - 1;
    d = t * 365 + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400);
    for (let m = 1; m < i; m++)
        d += dpm[m] + ((m == 2 && isLeap(j)) ? 1 : 0);
    y -= 2;
    day = (d) % 7;
    cnt = 0;
    ans = -1;
    for (let it = 1; it <= dpm[i] + ((i == 2 && isLeap(j)) ? 1 : 0); it++, day = (day + 1) % 7) {
        if (day == y) {
            cnt += 1;
        }
        if (cnt == x) {
            ans = it;
            break;
        }
    }
    return ans;
}

rl.on('line', function (line) {
    input.push(parseInt(line));
    if (input.length == 4) 
        console.log(solve(input));
})
