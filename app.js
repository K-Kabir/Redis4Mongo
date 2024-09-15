require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose');

const userRoutes = require('./routes/users');

const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(() => console.log(`Connected to mongo Atlas`));

app.get('/check', function (req, res) {
  res.send('All OK 👍');
});

app.use('/user', userRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}...`)
});