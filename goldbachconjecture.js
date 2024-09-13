const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
    n = parseInt(line);
    let sieve = Array(n + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    for (let i = 2; i <= n / 2; i++) {
        if (sieve[i] == false)
            continue;
        for (let j = 2; j * i < n; j++) {
            sieve[i * j] = false;
        } 
    }
    /*for (let i = 1; i <= n; i++) {
        if (sieve[i])
            console.log(i);
    }*/
    ans = 0;
    for (let i = 3; i <= n / 2; i += 2) {
        if (sieve[i] && sieve[n - i])
            ans += 1;
    }
    console.log(ans);
}); 