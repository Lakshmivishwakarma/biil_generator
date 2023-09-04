import { ObjectId } from "mongodb";
import ejs from 'ejs';
import fs from 'fs';
import pdf from 'html-pdf';

const pdfControllerEjs = async (req, res) => {
    console.log(req);
    const invoiceNumber = req.params.id;
    try {
        fs.readFile(`public/bills/${invoiceNumber}.pdf`, function (err, data) {
            res.contentType('application/pdf');
            res.send(data);
            if (err) {
                console.error(err)
                return
            }

            console.log(data)
        });

    } catch (error) {
        console.log(error)
    }
};

export default pdfControllerEjs;
