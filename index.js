const express = require("express");
const fs = require('fs');
const app = express()

app.get('/', (req, res) => {

    fs.readFile('./home.html', 'utf8', (err, html) => {

        if (err){
            res.status(500).send('sorry, out of order')
        }

        res.send(html)
    })
});

app.listen(process.env.PORT || 3000, () => console.log('App avaiable on http://localhost:3000'))