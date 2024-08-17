const express = require('express');
const app = express();


app.get("/sum", async function (req, res) {
        const a =  req.query.a;
        const b = req.query.b;

        let sum = parseInt(a) + parseInt(b);
        res.status(200).send(`sum is ${sum}`);
})

app.listen(3000);