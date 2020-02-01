const express = require('express');
const mongoose = require('mongoose');
const routes = require('./route')
const cors = require('cors')
const app = express();

mongoose.connect('mongodb+srv://lucas:lucas123456@estudos-ep5xv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);



app.listen(3333);

