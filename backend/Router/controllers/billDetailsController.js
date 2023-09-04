import ejs from 'ejs';
import fs from 'fs';
import pdf from 'html-pdf';

// Generate a unique invoice number
function generateInvoiceNumber(vendorName) {
    const timestamp = Date.now();
    const d = new Date();
    let date = d.getDate();
    const firstTwoChars = vendorName.slice(0, 2).toUpperCase();
    console.log(firstTwoChars);
    const randomNumber = Math.floor(Math.random() * 10000);
    return `${firstTwoChars}${date}${randomNumber}`;
}

const billdetailsController = async (req, res) => {
    const data = req.body;
    let lineItems = data.lineItems;
    let vendorName = data.billFrom.vendorName;
    const totalPrice = lineItems.reduce((acc, item) => acc + item.price, 0);
    let invoiceNumber = generateInvoiceNumber(vendorName);
    data.invoiceNumber = invoiceNumber;
    data.totalPrice = totalPrice;

    try {
        let storeData = await req.db.collection("bill_details").insertOne(data);
        console.log(data);

        // res.json({ data });
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

        // Generate the PDF
        pdf.create(html, pdfOptions).toStream((err, stream) => {
            if (err) {
                console.error('Failed to generate PDF', err);
                throw err;
            }

            // Define the file path to save the PDF
            const filePath = `public/bills/${invoiceNumber}.pdf`;

            // Pipe the PDF stream to a file
            const writeStream = fs.createWriteStream(filePath);
            stream.pipe(writeStream);

            writeStream.on('finish', () => {
                console.log('PDF saved successfully');

                // Set response headers for the PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename="${invoiceNumber}.pdf"`);

                // Send the saved PDF file as the response
                fs.createReadStream(filePath).pipe(res);
            });

            // Handle any errors while writing the PDF
            writeStream.on('error', (error) => {
                console.error('Failed to save PDF', error);
                throw error;
            });
        });
    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }

}

export { billdetailsController };