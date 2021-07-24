//Importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();      //?????????

//Assigning Port 
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//Import Database Link
const URL = process.env.MONGODB_URL

//Importing the exported modules
const studentRouter = require('./routes/students.js');

//To use the student.js
app.use('/student', studentRouter);

//MonoDB connection configurations
mongoose.connect(URL, {
    useCreateIndex: true,                  //Create an Indexes
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false,
})

//Create Connection

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Connection Successful");
})

app.listen(PORT, () => {
    console.log('The Server is up and running on port ${PORT}');
})