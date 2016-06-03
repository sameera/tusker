import express = require('express');
import core = require("../../core");
import model = require("../../model");

export class RoomRepository implements core.RouteHandler {

    private floorParam = "floor";

    registerRoutes = (baseUrl: string, router: express.Router): express.Router => {

        router.get(`${baseUrl}/:${this.floorParam}`, this.getRooms);

        return router;
    }

    getRooms = (req: express.Request, res: express.Response) => {
        let floor: number;

        if (!req.params[this.floorParam]) {
            // TODO: return all rooms on all floors
        } else if ((floor = parseInt(req.params[this.floorParam]))) {
            // TODO: Return rooms for that floor
        } else {
            res.sendStatus(422);
        }

    }
    
}