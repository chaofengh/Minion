const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./src/backend/api')



const app = express();
const PORT = process.env.PORT || 4001;
app.use(cors())
app.use(bodyParser.json())
app.use('./api',apiRouter)

module.exports = app;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})