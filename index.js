const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./Routes/user');

const port = 3000;

app.use('/user', userRoutes);


app.listen(port, () => console.log(`Server running on port: ${port} `));