# Freenote ![Freenote icon](Freenote.png?raw=true "Freenote") 
Freenote is an open-source note-taking application. It consists of two separate applications, a client and a server.

## Client
The client's user interface follows Microsoft' Ribbon style. It was built with a stack of great open-source frameworks, including Node.js, Webpack, Babel, Preact, Redux and Sass.

Credit must be given to these sample projects, as they were greatly helpful in starting the project: 
* https://github.com/developit/zero-to-preact
* https://github.com/developit/preact-redux-example

### TODO
#### UI elements and mockups
* Toolbars
* Sidebar
* File menu
* Login / Logout
* Animations

#### Notes
* Tags
* Pinning
* Checkboxes

#### Features
* Search
* Login
* Synchronization with server
* Drag to reorder

## Server
The server provides a REST API for authentication using OAuth 2 and JSON Web Tokens, and a WebSocket service for interacting with the MongoDB database.

### TODO
* Server configuration
* Basic server features
* Login mockup service
* Save mockup service