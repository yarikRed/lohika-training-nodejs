# lohika-training-nodejs
Nodejs training course

### Run project
- `npm start` - for start project;
- `npm run-script build` - for build project;


## 1. Homework #1:
- Create the app.js file with the server example (may be copied from the slides) which accepts requests and responds with “Hellow world!” message to all requests.
  >	- server on port APP_PORT which responds with “Hello world!” message to all requests.
  
- Take APP_PORT (for server) from env variables, ENV from cli args and populate config object which will be imported in the app.js from config.js.
	> - APP_PORT env variable
	> - ENV cli arg
	> - config.js with config object which contains APP_PORT, ENV
	
- When server is up – log a message: `Server is listening on port <PORT>. Env is <ENV>.` Use the logger created in a separate file which will use console methods for now
	
	> - log a message `Server is listening on port <PORT>. Env is <ENV>.` Using the imported logger (from separate file)

## 2. Homework #2:
- Migrate to typescript

- Create server.ts with couple of routes
	> - Use different http methods
	> - Implement extract of the request body

- Add error handlers (can be done in express server)
	> - Unhandled rejection
	> - Uncaught exception

- Add logger which would also log request details (can be done in express server)
	> - Update logger by using vendor lib instead of console
	> - Log request details (request id, url, params)
	> - Implement at least one transport (can be to the file) *
