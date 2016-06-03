import chai = require('chai');
import request = require('supertest');
import { Task } from "../../model/model.types";

var expect = chai.expect;

describe("Task API", () => {

    let baseUrl = "http://localhost:1337";

    before(() => {
        
    });

    it("should return tasks for a given room", done => {
        request(baseUrl)
            .get("/api/tasks/01")
            .end((error, res) => {
                if (error) throw error;
                              
                expect(res.status).to.equal(200);
                expect(res.body).to.not.an('Array');

                let task = <Task>res.body;
                expect(task.roomId).to.equal("01");

                done();
            });
    });

});