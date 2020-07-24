var path = require('path');
const express = require('express');
var AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'));

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.post('/api', (req, res)=>{
    textapi.sentiment({
        'url': req.body.url,
        'mode': 'document'
      }, (error, response) =>{
        if (error == null) {
            console.log(response);
            res.send(response);
        } else {
            console.log('Error in getting data from API', error)
        }
      });
});

// designates what port the app will listen to for incoming requests
app.listen(8090, function () {
    console.log('Example app listening on port 8090!')
})