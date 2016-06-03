import mongoose = require('mongoose');
import types = require("./_types");

interface Task {
    name: string;
    roomId: string;
    description: string;
    recurrence: number;
    lastPerformed: Date;
}

interface TaskDoc extends Task, mongoose.Document { }

let taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    roomId: { type: String, required: true },
    description: String,
    effort: { type: Number, required: true },
    grossness: { type: Number, default: 5 },
    recurrence: { type: Number, default: 1 },
    lastPerformed: { type: Date, default: Date.now }
});

export = mongoose.model<TaskDoc>("Task", taskSchema);