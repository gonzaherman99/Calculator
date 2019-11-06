const express = require("express");
const bodyParser = require('body-parser');

const app =  express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var input = req.body.cantidad;
   input = parseFloat(input);
    console.log(input);
});

app.listen(3000, function(req, res) {
    console.log("Port started on 3000");
});
