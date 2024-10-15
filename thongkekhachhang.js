const fs = require('fs');

function parseCSV(csvString) {
    const rows = csvString.trim().split('\n');
    const headers = rows[0].split(',');
    const data = rows.slice(1).map(row => row.split(','));

    const customerIndex = headers.indexOf('CustomerID');
    const invoiceDateIndex = headers.indexOf('InvoiceDate');

    const filteredData = data
        .map(row => ({
            customerID: row[customerIndex],
            invoiceDate: row[invoiceDateIndex]
        }))
        .filter(row => row.customerID);

    return filteredData;
}

function parseDate(dateString) {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/').map(Number);
    let hours = 0;
    let minutes = 0;

    if (timePart) {
        const timeParts = timePart.split(':');
        if (timeParts.length === 2) {
            hours = Number(timeParts[0]);
            minutes = Number(timeParts[1]);
        }
    }

    return new Date(year, month - 1, day, hours, minutes);
}

fs.readFile('input1.txt', 'ascii', (err, data) => {
    const csvString = data;
    let filteredData = parseCSV(csvString);

    const startRow = 515284;
    if (startRow < filteredData.length) {
        filteredData = filteredData.slice(0, startRow);
    }

    const customerLatestDate = {};
    filteredData.forEach(row => {
        const { customerID, invoiceDate } = row;
        const date = parseDate(invoiceDate);
        if (!customerLatestDate[customerID] || date > parseDate(customerLatestDate[customerID])) {
            customerLatestDate[customerID] = invoiceDate;
        }
    });

    const uniqueCustomers = Object.keys(customerLatestDate).map(customerID => ({
        customerID: customerID,
        invoiceDate: customerLatestDate[customerID]
    }));

    uniqueCustomers.sort((a, b) => parseDate(a.invoiceDate) - parseDate(b.invoiceDate));

    uniqueCustomers.forEach((row, index) => {
        row.score = index;
    });

    uniqueCustomers.sort((a, b) => a.customerID.localeCompare(b.customerID));

    let outputData = "CustomerID  score\n";
    uniqueCustomers.forEach(row => {
        outputData += `${row.customerID.padEnd(10)} ${row.score.toString().padStart(5)}\n`;
    });

    fs.writeFile('output1.txt', outputData.trimEnd(), 'utf8', (err) => {
        if (err) {
            console.error(`Đã xảy ra lỗi khi ghi file: ${err}`);
        }
    });
});
