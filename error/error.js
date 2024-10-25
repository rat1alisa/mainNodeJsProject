const express = require("express");
const app = express();

app.use(" mainNodeJsProject/error", function(require, response) {
    response.sendStatus(404).send('Not found');
});

app.listen(3000);