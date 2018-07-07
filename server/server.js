const express = require('express');
const path = require('path'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const serveStatic = require('serve-static');
require('dotenv').config()


const app = express();

// Init body parser

app.use(bodyParser.json());

// Init cors 

app.use(cors())

app.use('/',serveStatic(__dirname + "/dist"));

// Import routes:
const burgerController = require('./controllers/burger.js'); 
app.use('/burger', burgerController); 




const PORT = process.env.PORT || 3000; 

app.listen(PORT, (err) => {
    if(err) throw err; 
    console.log("server is running on port:", PORT); 
});

