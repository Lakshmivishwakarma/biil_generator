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

        pdf.create(html, pdfOptions).toBuffer((_, buffer)=>{
            res.send(buffer);
        })
        
    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }

}

export { billdetailsController };