const express = require('express');
const cors = require('cors');
const api = require('./routes/api');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1', api);

app.use('*/', (req, res)=>{
    return res.send("EcoBazar Api");
})

module.exports = app;

