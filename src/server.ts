import http from 'http';
import { config } from './config';
import { logger } from './logger';

const {
    APP_PORT: PORT,
    ENV,
} = config;

export const server = http.createServer((req, res) => {
    console.log('New incoming request');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello world!' }));
}).listen(PORT, () => logger.log(`Listening on port ${PORT}... Env is ${ENV}`));
