import http = require('http');
import mongoose = require('mongoose');

import core = require("./core");
import apiRouter = require("./api/1.0");

let port = process.env.port || 1337
let app = core.startApp(port);

app.use("/api", apiRouter);

mongoose.connect("mongodb://localhost/tusker", null, err => {
    if (err) throw err;
});