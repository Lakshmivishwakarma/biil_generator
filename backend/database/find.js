import dbConnect from "./db_service";

console.log(dbConnect);

const find = async () => {
    let db = await dbConnect();
    console.log("fetching data");
    let result = await db.collection("bills").find({}).toArray();
    console.log(result)
    return result;
}

module.exports = find;

