import express = require('express');

class MockRequest {

    private req: express.Request;
    private res: express.Response;

    public and: MockRequest;
    public then: MockRequest;

    public constructor(private controller: express.RequestHandler) {
        this.and = this.then = this;
    }

    public with = (params: any): MockRequest => {
        this.req = <any>{ params: params };
        return this;
    }

    public expecting = (res: express.Response): MockRequest => {
        this.res = res;
        return this;
    }

    public verifyAs = (assertions: (err: any) => void, done: (err?: any) => void): void => {
        this.controller(this.req || <any>{}, this.res || <any>{}, err => {
            try {
                assertions(err);
                done();
            } catch (ex) {
                done(ex);
            }
        });
    }
}

export = function (controller: express.RequestHandler): MockRequest {
    return new MockRequest(controller);
}