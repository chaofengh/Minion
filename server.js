const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 4001;


app.use(cors())
app.use(bodyParser.json())

module.exports = app;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})