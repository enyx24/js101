const { parse } = require('node:path');
const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

// https://stackoverflow.com/questions/64850027/reading-multiple-lines-in-node-js

let coeff = [3600, 60, 1];
let dur = 0;
let wd = 0;
let previousLine = "";

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

rl.on("line", (line) => {
    if (!previousLine) {
        previousLine = line;
        t = line.split(' ');
        // console.log(dur, coeff, t);
        for (let i = 0; i < 3; i++)
            dur += coeff[i] * parseInt(t[i]);
        // console.log("firstline");
    } else {
        // console.log("secondline");
        wd = 0;
        t = line.split(' ');
        for (let i = 0; i < 3; i++)
            wd += coeff[i] * parseInt(t[i]);
        // console.log(dur, wd);
        cd = gcd(dur, wd);
        console.log(wd / cd, dur / cd);
    }
});