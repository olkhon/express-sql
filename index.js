const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require('./Routes/user');
const orderRoutes = require('./Routes/orders');

const port = 3000;

app.use('/user', userRoutes);
app.use('/orders', orderRoutes);


app.listen(port, () => console.log(`Server running on port: ${port} `));