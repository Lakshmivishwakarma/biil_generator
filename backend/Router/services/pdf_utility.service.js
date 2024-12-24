import pdf from 'html-pdf';
import ejs from 'ejs';
import fs from 'fs';

const generatePdf = (data) => {
    // Render the EJS template
    const ejsTemplate = fs.readFileSync('views/bill.ejs', 'utf-8');
    const html = ejs.render(ejsTemplate, { data });

    // Configure the PDF options
    const pdfOptions = {
        format: 'Letter',
        border: {
            top: '1in',
            right: '1in',
            bottom: '1in',
            left: '1in'
        },
    };

    // Create PDF from the rendered HTML
    return pdf.create(html, pdfOptions)
};

export { generatePdf };