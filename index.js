require('dotenv').config();

const express = require("express");
const fs = require('fs');

const app = express();

const alphaVantageKey = process.env.ZLW_ALPHAVANTAGE_PUBLICAPI_KEY;

app.get('/', (req, res) => {
    fs.readFile('./home.html', 'utf8', (err, html) => {
        if (err){
            return res.status(500).send('sorry, out of order');
        }
        res.send(html);
    });
});

async function fetchAUXprocies() {
    const url = `https://www.alphavantage.co/query?function=GOLD_SILVER_SPOT&symbol=XAU&apikey=${alphaVantageKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log('Status:', response.status);
            return;
        }

        const data = await response.json();
        console.log(data);

    } catch (err) {
        console.log('Error:', err);
    }
}

app.listen(process.env.PORT, () => 
    console.log(`App available on http://localhost:${process.env.PORT}`)
);

fetchAUXprocies();