const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

function pal(arr1, arr2) {
    // console.log(arr1, arr2);
    return (arr1 === arr2.split('').reverse().join(''))
}

rl.on("line", function (line) {
    const s = line;
    for (var i = 0; i < s.length; i++) {
        if (pal(s.slice(i, i + Math.floor((s.length - i) / 2)), s.slice(i + Math.ceil((s.length - i) / 2), s.length))) {
            console.log(s.slice(0, i).split('').reverse().join(''));
            return;
        }
    }
    console.log(s.split('').reverse().join(''));
});
