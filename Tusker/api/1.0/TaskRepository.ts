﻿import express = require('express');
import { IThenable } from 'promise';
import core = require("../../core");
import model = require("../../model");
import { Task } from "../../model/_types";


export class TaskRepository implements core.RouteHandler {

    private roomParam = "room";

    public registerRoutes = (baseUrl: string, router: express.Router): express.Router => {
        
        router.get(`${baseUrl}/:${this.roomParam}`, this.getTasks);

        return router;
    }

    public getTasks = (req: express.Request, res: express.Response, next: express.NextFunction): void => {

        let roomId = <string>req.params[this.roomParam];
        
        if (!req.params[this.roomParam]) {
            res.sendStatus(422);
            return next();
        }

        this.getTasksForRoom(roomId.toString())
            .then(task => {
                res.json(task);
                next();
            }).catch(err => {
                res.sendStatus(404);
                next(err);
            });
    }

    private getTasksForRoom = (roomId: string): IThenable<Task> => {
        return new Promise<Task>((resolve, reject) => {
            resolve(<Task>{
                roomId: roomId,
                name: "Vacuum"
            });



            /*
            model.TaskModel.findOne(<Task>{ roomId: roomId }, (error, task) => {
                if (error) reject(error);
                resolve(task);
            });
            */
        });
    }
}