let online = new Set();
let out = "";
let buffer = "";  // Biến đệm để lưu trữ dữ liệu nhận được

process.stdin.on('data', (data) => {
    buffer += data.toString();  // Tích lũy dữ liệu vào buffer
    let lines = buffer.split('\n');  // Chia thành từng dòng

    // Xử lý tất cả các dòng trừ dòng cuối cùng (có thể chưa đầy đủ)
    for (let i = 0; i < lines.length - 1; i++) {
        let line = lines[i];
        if (line === '0') {
            process.stdout.write(out);  // In kết quả ra
            process.exit(0);  // Kết thúc chương trình
        }

        let cmd = line[0] - '0';
        let val = 0;

        for (let j = 2; j < line.length; j++) {
            val = val * 10 + (line[j] - '0');
        }

        if (cmd === 1) {
            online.add(val);
        } else if (cmd === 3) {
            online.delete(val);
        } else if (cmd === 2) {
            out += online.has(val) ? "1\n" : "0\n";
        }
    }

    // Giữ lại phần chưa hoàn chỉnh trong buffer (nếu có)
    buffer = lines[lines.length - 1];
});

