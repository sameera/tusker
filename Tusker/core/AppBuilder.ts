import http = require('http');
import express = require('express');

export class AppBuilder {

    public static build(portOrPath: any): express.Express {
        let app = express();

        let handle = AppBuilder.normalizePort(portOrPath);
        let server = app.listen(handle, () => {
            let addr = server.address();
            let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
            console.info(`Listening on ${bind}`);
        });

        server.on("error", error => AppBuilder.onServerError(server, error));
        server.setTimeout(600000, null);

        return app;
    }

    private static onServerError(server: http.Server, error: NodeJS.ErrnoException) {
        if (error.syscall !== 'listen')
            throw error;

        let addr = server.address();
        let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    private static normalizePort(val: any): any {

        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        } else if (port >= 0) {
            // port number
            return port;
        } else {
            return false;
        }
    }
}