// import dbConnect from "../../database/db_service";

const signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body)
        if (!email || !password) {
            return res.status(400).json({ error: "Username/ Password is required" })
        }

        let response = await req.db.collection("users").findOne({ email: email, password: password })
        console.log(response);
        if (!response) {
            res.status(400).json({ error: "Something went wrong, Please try again" })
        } else {
            res.json({ response })
        }
    } catch (err) {
        console.log(err);
    }

}

const register = async (req, res) => {
    const data = req.body;

    console.log(data)
    // let db = await dbConnect();

    try {
        let dbResponse = req.db.collection("users").insertOne(data);
        res.json({ message: 'User Sign up succesfull' });
    } catch (err) {
        db.close();
        throw err;
    }
};


export { register, signIn };
