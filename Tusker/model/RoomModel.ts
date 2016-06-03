import mongoose = require('mongoose');
import types = require("./_types");

interface RoomDoc extends types.Room, mongoose.Document { }

var roomSchema = new mongoose.Schema({
    roomId: { type: String, required: true },
    floor: { type: String, required: true },
    name: { type: String, required: true }
}, { _id: false });

var RoomModel = mongoose.model<RoomDoc>("Room", roomSchema);
export = RoomModel;
