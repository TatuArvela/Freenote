# Freenote
An open-source note-taking application.

## Client
The client adorns a Microsoft Ribbon style user interface, and is built using Node.js, Webpack, Preact, Redux and Sass. Express is used for running the project on a development server.

I must give credit to these great reference projects: 
* https://github.com/developit/zero-to-preact
* https://github.com/developit/preact-redux-example

## Server
The server provides a REST API for authentication using OAuth 2 and JSON Web Tokens, and a WebSocket service for interacting with the MongoDB database.