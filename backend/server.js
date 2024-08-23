const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const Book = require('./models/bookModel');
const booksRoute = require('./routes/booksRoute');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/books', booksRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});
const mongodb = process.env.mongoDBURL;
const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


mongoose.connect(mongodb).then(() => {
        console.log('MongoDB Connected');
    }).catch((err) => {
        console.log(err);
    });