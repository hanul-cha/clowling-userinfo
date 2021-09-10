const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('./api/hollo', (req,res) => {
    res.send({ message: "hello express!" });
});

app.listen(port, () => console.log(`서버가동 포트: ${port}`));