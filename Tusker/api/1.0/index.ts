/// <reference path="TaskRepository.ts" />

import express = require('express');
import core = require("../../core");
import tasks = require("./TaskRepository");
var apiRouter = express.Router();

core.registerRoutes(apiRouter, [
    [ "/tasks", new tasks.TaskRepository() ]
]);

export = apiRouter;