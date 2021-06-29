import express from 'express';
import dotenv from 'dotenv';


//components
import conn from './database/Db.js';
import DefaultData from './DefaultData.js';


dotenv.config()
const app = express()
const port = 8000

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
conn(username, password);

app.listen(port, () => {
    console.log(`port sccessfully started at ${port}`)
})


//data to Database
DefaultData();
