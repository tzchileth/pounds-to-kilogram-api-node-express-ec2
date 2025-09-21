const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {    
    res.send("<h1>Pounds to Kilogram API Converter</h1>");
});

// route to convert from lbs to kilogram
app.get('/api/convert/', (req, res) => {
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

// Environment Variables
const port = process.env.PORT || 3000;  // use PORT enviroment variable or port 3000

// listen on the port
app.listen(3000, () => console.log(`Listening on port ${port}...`));