const express = require("express");
const app = express();

app.use("home/foo/bar", function(require, response) {
    response.sendStatus(404).send('Not found');
});

app.listen(3000);