import ejs from 'ejs';
import fs from 'fs';
import pdf from 'html-pdf';
import { generatePdf } from '../services/pdf_utility.service.js';

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

    

        const result = generatePdf(data);


        result.toStream((err, stream) => {
            if (err) {
                console.error('Failed to generate PDF', err);
                return res.status(500).send('Failed to generate PDF');
            }
        
            // Set response headers for the PDF
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `inline; filename="${invoiceNumber}.pdf"`); // Change 'attachment' to 'inline' for direct view in browser
        
            // Pipe the PDF stream directly to the response
            stream.pipe(res);
        
            // Handle any errors while streaming the PDF
            stream.on('error', (error) => {
                console.error('Failed to stream PDF', error);
                res.status(500).send('Failed to generate PDF');
            });
        });

    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }

}

export { billdetailsController };