// const express = require('express');
import express from 'express';
const app = express();
const port = 4000;
import cors from "cors";
import dbConnect from './database/db_service.js';
import router from './Router/auth.router.js';

// import createInvoice from "./createInvoice.js"
app.use(cors({
    origin: '*'
}));

app.use(express.json())

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Connect to the database
const db = await dbConnect();

// Pass the database connection to your routes 
app.use((req, res, next) => {
    req.db = db;
    next();
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)

});

app.use(router);

