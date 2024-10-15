const figlet = require('figlet');

let input = "";

// Đọc dữ liệu từ stdin
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const lines = input.split('\n');

    // Dòng đầu tiên là text cần render
    const textToRender = lines[0].trim();

    // Phần còn lại là nội dung của figfont
    const customFont = lines.slice(1).join('\n').trim();

    try {
        // Parse font với tên 'customFont'
        figlet.parseFont('customFont', customFont);

        // Render text với font đã parse
        figlet.text(textToRender, {
            font: 'customFont',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (err, data) => {
            if (err) {
                console.error('Error:', err);
                return;
            }
            console.log(data);
        });
    } catch (error) {
        console.error('Có lỗi khi xử lý font:', error);
    }
});

// Bắt đầu quá trình nhập từ stdin
process.stdin.resume();
