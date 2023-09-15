const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server Started Successfully at Port:${PORT}`)
})

app.use(express.json());

const todoRoutes = require('./routes/todos');

app.use('/api/v1', todoRoutes);

const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req, res) => {
    res.send(`<h1>This is The HOMEPAGE</h1>`)
})