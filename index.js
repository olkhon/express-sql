const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./Routes/user');
const orderRoutes = require('./Routes/orders');

const port = 3000;

app.use('/user', userRoutes);
app.use('/orders', orderRoutes);


app.listen(port, () => console.log(`Server running on port: ${port} `));