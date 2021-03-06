require('dotenv/config');
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname,'document')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./router/wordsolver'));
app.use(require('./router/countdownsolver'));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname+'/document/index.html'));
})

app.use((req, res, next) => {
    res.send("404 NOT FOUND");
})
app.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT)
});