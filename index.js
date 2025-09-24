const express = require('express');
const app_1 = express();     // this app listens on port 80
const app_2= express();     // this app listens on port 8080

app_1.use(express.json());
app_2.use(express.json());

/*******************  app_1 implementation *****************************************/
app_1.get('/', (req, res) => {    
    res.send("<h1>Pounds to Kilogram API Converter</h1>");
});

// route to convert from lbs to kilogram
app_1.get('/api/convert/', (req, res) => {
    const poundsValue = req.query.lbs;

    if (poundsValue === "" || isNaN(poundsValue))
    {
        // 400 Bad Request
        res.status(404).send(`<h1 style="text-align: center;">404: Bad Request!<br>Missing / Invalid Params<br>Enter valid numbers only.</h1>`);
        return;
    } 
    else if (Number(poundsValue) === Infinity || Number(poundsValue) === Number.NEGATIVE_INFINITY || Number(poundsValue) < 0.0) {
        // 422 Unprocessable Entity (negative or non-finite)
        res.status(422).send(`<h1 style="text-align: center;">422: Unprocessable Entity!<br>Positive and finite numbers only!</h1>`);
        return;
    }
    
    const data = {
        "lbs": `${poundsValue}`, 
        "kg": `${poundsValue * 0.45359237}`, 
        "formula": "kg = lbs * 0.45359237",
    }

    res.json(data);
});

const app_1_port_80 = 80;  // listen on port 80
// listen on the port 80
app_1.listen(app_1_port_80, () => console.log(`Listening on port ${app_1_port_80}...`));

/*******************  app_2 implementation *****************************************/
app_2.get('/', (req, res) => {    
    res.send("<h1>Pounds to Kilogram API Converter</h1>");
});

// route to convert from lbs to kilogram
app_2.get('/api/convert/', (req, res) => {
    const poundsValue = req.query.lbs;

    if (poundsValue === "" || isNaN(poundsValue))
    {
        // 400 Bad Request
        res.status(404).send(`<h1 style="text-align: center;">404: Bad Request!<br>Missing / Invalid Params<br>Enter valid numbers only.</h1>`);
        return;
    } 
    else if (Number(poundsValue) === Infinity || Number(poundsValue) === Number.NEGATIVE_INFINITY || Number(poundsValue) < 0.0) {
        // 422 Unprocessable Entity (negative or non-finite)
        res.status(422).send(`<h1 style="text-align: center;">422: Unprocessable Entity!<br>Positive and finite numbers only!</h1>`);
        return;
    }
    
    const data = {
        "lbs": `${poundsValue}`, 
        "kg": `${poundsValue * 0.45359237}`, 
        "formula": "kg = lbs * 0.45359237",
    }

    res.json(data);
});

// const port = 8080;  // listen on port 8080
const app_2_port_8080 = 8080;  // listen on port 8080
// listen on the port 8080
app_2.listen(app_2_port_8080, () => console.log(`Listening on port ${app_2_port_8080}...`));
