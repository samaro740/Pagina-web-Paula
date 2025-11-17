const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRouter = require('./routes/register');

const app = express();

mongoose.connect('mongodb://localhost:27017/citasdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(registerRouter);

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
