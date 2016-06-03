import express = require('express');
import {AppBuilder} from "./AppBuilder";


export interface RouteHandler {
    registerRoutes(baseUrl: string, router: express.Router): express.Router;
}

export type Route = [string, RouteHandler];

export function startApp(portOrPath: any): express.Express {
    return AppBuilder.build(portOrPath);
}

export function registerRoutes(router: express.Router, routes: Route[]): void {
    routes.forEach(r => r[1].registerRoutes(r[0], router));
};