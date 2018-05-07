const express = require('express');
const path = require('path'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 



const app = express();

// Init body parser

app.use(bodyParser.json());

// Init cors 

app.use(cors());/.?

'?'

// Import routes:
const burgerController = require('./controllers/burger.js'); 
app.use('/burger', burgerController); 


app.get('/', (req, res) => {
    res.send('Go away!');
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, (err) => {
    if(err) throw err; 
    console.log("server is running on port:", PORT); 
});

