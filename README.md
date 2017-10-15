![Freenote icon](./logo.png?raw=true "Freenote")

Freenote is an open-source note-taking application. It consists of two separate applications; a client and a server.

<!-- -->

## Client

The client's user interface mixes tabbed toolbars with Google's Material Design. 

### Ingredients and recipes
The base for the client was created using **create-react-app** with **TypeScript** scripts.

The project was ejected (&#9167;), so **Sass** could be configured to **Webpack** without any funny business.

Other additions have been **Redux**, **React Router** and **Redux Thunk**.

I used these guides as reference:
* https://github.com/Microsoft/TypeScript-React-Starter
* https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
* http://redux.js.org/docs/basics/ExampleTodoList.html

### Upcoming features
#### Development
* Adding and deleting notes
* Login / Logout mockup
* Toolbar switching

#### Backlog
* Testing implementation (Mocha & Chai)
* User details
* Undo
* Drag to reorder
* Pinning
* Text formatting
* Localization
* Note synchronization with server
* Login / Logout implementation with server
* Search
* Checklists
* Multiple stacks
* Archiving
* Tags
* Adding pictures

<!-- -->

## Server
The server provides a REST API for authentication using OAuth 2 and JSON Web Tokens, and a WebSocket service for interacting with the MongoDB database.

### Upcoming features
#### Backlog
* Server configuration
* Basic server features
* Login mockup service
* Save mockup service
