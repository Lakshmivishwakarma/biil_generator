const viewBillListController = async (req, res) => {
    try {
        const collection = req.db.collection('bill_details');
        const data = await collection.find().toArray();
        res.json(data);
    } catch (err) {
        console.log(err);
    }

}

export { viewBillListController };
