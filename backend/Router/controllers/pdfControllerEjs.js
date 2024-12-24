import { ObjectId } from 'mongodb'
import { generatePdf } from '../services/pdf_utility.service.js';

const pdfControllerEjs = async (req, res) => {
    const id = req.params;

    try {
        const data = await req.db.collection('bill_details').findOne({ '_id': new ObjectId(id) });
        const invoiceNumber = data.invoiceNumber
        const result = generatePdf(data);
        result.toStream((err, stream) => {
            if (err) {
                console.error('Failed to generate PDF', err);
                return res.status(500).send('Failed to generate PDF');
            }

            // Set response headers for the PDF
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `inline; filename="${invoiceNumber}.pdf"`);

            // Pipe the PDF stream directly to the response
            stream.pipe(res);

            // Handle any errors while streaming the PDF
            stream.on('error', (error) => {
                console.error('Failed to stream PDF', error);
                res.status(500).send('Failed to generate PDF');
            });
        });


    } catch (error) {
        console.log(error)
    }
};

export default pdfControllerEjs;
