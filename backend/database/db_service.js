import { MongoClient, ObjectId } from "mongodb";

const dbConnect = async (url) => {
    const client = new MongoClient(url);
    let connection = await client.connect();
    let db = connection.db('billing_db')
    console.log("connection successful");
    return db;
}

const getObjectId = (id) => ObjectId(id)

export default dbConnect;
