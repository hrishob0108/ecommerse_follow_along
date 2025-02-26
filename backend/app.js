const express = require('express');
const ErrorHandler = require('./middleware/error');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Fixed typo
app.use(express.urlencoded({ extended: true }));
app.use(express.static('upload'))

const userRouter = require("./controller/user");//Routes import
const productRout=require('./controller/Product')


app.use('/api', userRouter); // Fixed incorrect variable name
app.use('/api/products',productRout)

if (process.env.NODE_ENV !== 'production')
    require('dotenv').config({ path: 'backend/config/.env' });

app.use(ErrorHandler);
module.exports = app;
