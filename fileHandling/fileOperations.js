// fileHandling/fileOperations.js
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

// Generate PDF invoice
function generateInvoice(request) {
    const doc = new PDFDocument();
    const fileName = path.join(__dirname, '../invoices', `invoice_${request.id}.pdf`);

    // Ensure invoices directory exists
    if (!fs.existsSync(path.join(__dirname, '../invoices'))) {
        fs.mkdirSync(path.join(__dirname, '../invoices'), { recursive: true });
    }

    doc.pipe(fs.createWriteStream(fileName));
    doc.fontSize(12).text(`Invoice for ${request.type.toUpperCase()} Bill`);
    doc.text(`Invoice ID: ${request.id}`);
    doc.text(`Date: ${request.date}`);
    doc.text(`Amount: $${request.amount}`);
    doc.text(`Customer Name: ${request.customerName}`);
    doc.text(`Address: ${request.address}`);
    doc.end();

    console.log(`Invoice generated: ${fileName}`);
}













// Generate PDF invoice
function generateInvoice(request) {
    const invoiceDir = path.join(__dirname, '../invoices');
    if (!fs.existsSync(invoiceDir)) {
        fs.mkdirSync(invoiceDir, { recursive: true });
    }

    const invoicePath = path.join(invoiceDir, `invoice-${request.id}.pdf`);
    const doc = new PDFDocument();

    // Write to file
    doc.pipe(fs.createWriteStream(invoicePath));

    // Add invoice content
    doc.fontSize(20).text('Utility Bill Payment Invoice', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Date: ${request.date}`);
    doc.text(`Customer Name: ${request.customerName}`);
    doc.text(`Address: ${request.address}`);
    doc.text(`Bill Type: ${request.type}`);
    doc.text(`Amount: $${request.amount}`);
    doc.text(`Urgent: ${request.urgent ? 'Yes' : 'No'}`);
    
    // Finalize the document
    doc.end();

    console.log(`Invoice generated: ${invoicePath}`);
}

module.exports = { generateInvoice };


module.exports = { generateInvoice };
