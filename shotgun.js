const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.on("line", function (line) {
    t = line.split(' ');
    [b, c, m, n, r] = t;
    ans = n * r;
    n -= m;
    if (n > 0) {
        if (b * m <= c) {
            ans += b * n;
        }
        else {
            ans += (c * Math.floor(n / m)) + Math.min(c, b * (n % m));
        }
    }
    console.log(ans);
});
