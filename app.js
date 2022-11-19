const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:/Employer';

const app = express()

mongoose.connect(url, {useNewUrlParser: true}); // useNewUrlParser is used to avoid errors

const con = mongoose.connection


// To check the Database connected
con.on('open', () => {
    console.log('Database connected.......................');
})

app.use(express.json());

const employersRouter = require('./routes/employers')
app.use('/employers', employersRouter);

app.listen(9000, () => {
    console.log('Server Started...........................');
})