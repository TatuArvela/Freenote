![Freenote icon](client/src/logo.png?raw=true "Freenote")

Freenote is an open-source note-taking application. It consists of two separate applications; a client and a server.

## Client
The client's user interface mixes tabbed toolbars with Google's Material Design. It is built upon a stack of great open-source frameworks, including Node.js, Webpack, Babel, Preact, Redux and Sass.

Credit must be given to these sample projects, as they were greatly helpful in starting the project: 
* https://github.com/developit/zero-to-preact
* https://github.com/developit/preact-redux-example

### Upcoming features
#### Development
* Refactor store and reducers
* Login / Logout mockup actions
* Toolbar switching function

#### To-do
* Note synchronization with server
* TypeScript
* Login / Logout implementation with server
* Search
* User details
* Checklists
* Multiple stacks
* Undo
* Tags
* Text formatting
* Localization
* Drag to reorder
* Pinning
* Archiving
* Adding pictures

## Server
The server provides a REST API for authentication using OAuth 2 and JSON Web Tokens, and a WebSocket service for interacting with the MongoDB database.

### Upcoming features
#### To-do
* Server configuration
* Basic server features
* Login mockup service
* Save mockup service