import { createServer, IncomingMessage, ServerResponse } from 'http';
import { config } from './config';
import { logger } from './logger';

const {
    APP_PORT: PORT,
    ENV,
} = config;

export const server = createServer((req: IncomingMessage, res: ServerResponse) => {

    const {method: METHOD} = req;
    console.log(req.method);
    switch(METHOD){
        case 'POST':
            let body = '';

            req.on('data', chunk => {
                body += chunk.toString();
            });
            
            req.on('end', () => {
                res.end(JSON.stringify({ message: body }));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                console.log(`New incoming request POST, "body message": ${body}`);
            });
            break;
        case 'GET':
            console.log('New incoming request GET');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'This is a body' }));
            break;
    }
}).listen(PORT, () => logger.log(`Listening on port ${PORT}... Env is ${ENV}`));
