const fs = require('node:fs');
const QRCode = require('qrcode-terminal');

input = fs.readFileSync('/dev/stdin','utf-8');

QRCode.generate(input);