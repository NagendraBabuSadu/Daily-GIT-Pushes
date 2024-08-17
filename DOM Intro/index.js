const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/sum", async function (req, res) {
        const a =  req.query.a;
        const b = req.query.b;

        let sum = parseInt(a) + parseInt(b);
        res.status(200).send(`sum is ${sum}`);
})


app.get('/interest', async function (req, res) {
        const principal = req.query.principal;
        const rate = req.query.rate;
        const time = req.query.time;

        let interestRate = parseFloat(rate * time);
        let totalAmount =parseFloat(principal) + parseFloat(interestRate);
        console.log(time);
        res.status(200).json({
                "Interest Rate" : interestRate,
                "Total" : totalAmount
        })
})


app.listen(3000);