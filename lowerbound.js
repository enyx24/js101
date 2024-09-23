const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

function binSearch(a, n, x) {
    // console.log(a.length, n, x);
    let l = 0, r = n - 1;
    let ans = n;
    while (l <= r) {
        let m = parseInt((l + r) / 2);
        if (a[m] >= x)
            r = m - 1;
        else
            l = m + 1;
        if (a[m] == x) 
            ans = Math.min(m, ans);
    }
    if (ans == n)
        ans = -1;
    return ans;
}

function solve(input) {
    // console.log(input);
    let n = parseInt(input[0]);
    let a = input[1].split(' ').map(str => parseInt(str));
    // console.log(a);
    let m = parseInt(input[2]); 
    let b = input[3].split(' ').map(str => parseInt(str));;
    for (let i = 0; i < m; i++) {
        console.log(binSearch(a, n, b[i]));
    }
    return;
}

input = [];
rl.on('line', function (line) {
    input.push(line);
    if (input.length == 4) 
        solve(input);
})