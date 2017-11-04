![Freenote icon](./logo.png?raw=true "Freenote")

Freenote is an open-source note-taking application. It consists of two separate parts: a web client and a server.

The main goal of this project is to make a working sample application using modern technologies.

## Demo server
Both parts of the application will be deployed on a Digital Ocean demo server using Jenkins CI.

## Client

The web client uses the following technologies:

* Webpack
* React
* Redux
* React Router
* Redux Thunk
* Sass

The web client's user interface is a mix of Google's Material Design and a tabbed toolbar.

I found these tutorials very helful:
* https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
* http://redux.js.org/docs/basics/ExampleTodoList.html

### Features
* Tabbed toolbar
* Adding and deleting notes
* Login view

## Server
The server will provide a REST API for authentication using OAuth 2 and JSON Web Tokens, and a WebSocket service for interacting with the MongoDB database. It will also use TypeScript for type validation.
