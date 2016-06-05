import chai = require('chai');
import sinon = require('sinon');
import { Task } from "../../model/_types";
import Tasks = require("../../api/1.0/TaskRepository");
import request = require("../MockRequest");

var expect = chai.expect;

describe("Task API", () => {

    let taskRepository: Tasks.TaskRepository;

    before(() => {
        taskRepository = new Tasks.TaskRepository();
    });

    describe("When retrieving tasks...", () => {
        it("should return tasks for a given room", done => {

            let req: any = {},
                res: any = {},
                responseCallback = sinon.spy();

            req.params = { room: "110" };
            res.json = responseCallback;

            request(taskRepository.getTasks)
                .with({ room: "110" })
                .expecting(res)
                .and
                .verifyAs(err => {
                    expect(err).to.not.exist;
                    expect(responseCallback.called).to.be.true;
                    
                    let task: Task = responseCallback.args[0][0];
                    expect(task.roomId).to.equal("110");
                }, done);
                
        });
    });

});