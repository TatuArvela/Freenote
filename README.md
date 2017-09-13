![Freenote icon](client/src/logo.png?raw=true "Freenote")

Freenote is an open-source note-taking application. It consists of two separate applications; a client and a server.

## Client
The client's user interface follows Microsoft' Ribbon style. It was built with a stack of great open-source frameworks, including Node.js, Webpack, Babel, Preact, Redux and Sass.

Credit must be given to these sample projects, as they were greatly helpful in starting the project: 
* https://github.com/developit/zero-to-preact
* https://github.com/developit/preact-redux-example

### Upcoming features
#### Development
* Refactor store and reducers
* Login / Logout mockup actions
* Login / Logout implementation with server

#### Analysis
* Toolbars
* Responsive layout
* Note synchronization with server

#### To-do
* Search
* Tags
* User details
* Checklists
* Multiple boards

#### Open
* Drag to reorder
* Pinning
* Adding pictures

## Server
The server provides a REST API for authentication using OAuth 2 and JSON Web Tokens, and a WebSocket service for interacting with the MongoDB database.

### Upcoming features
#### Development
* Server configuration
* Basic server features
* Login mockup service
* Save mockup service