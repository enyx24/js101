const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
    inp = line.split(' ');
    x = parseInt(inp[0]);
    y = parseInt(inp[1]);
    n = parseInt(inp[2]);
    m = parseInt(inp[3]);
    ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.ceil(m/x);
        x += y;
    } 
    console.log(ans);
});