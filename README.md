![Freenote icon](./logo.png?raw=true "Freenote")

Freenote is an open-source note-taking application. It consists of two separate parts: a web client and a server.

The main goal of this project is to make a working sample application using modern technologies.


## Demo server

Both parts of the application will be deployed on a Digital Ocean demo server using Jenkins CI.


## Client (0.2.0)

The web client uses the following technologies:

* Webpack
* React
* Redux
* React Router
* Redux Thunk
* Sass
* Socket.io

The web client's user interface is a mix of Google's Material Design and a tabbed toolbar.

I found these tutorials/projects very helpful:
* https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
* http://redux.js.org/docs/basics/ExampleTodoList.html
* https://github.com/reactjs/redux/blob/master/docs/advanced/ExampleRedditAPI.md
* https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
* https://github.com/raineroviir/react-redux-socketio-chat/

### Features
* Tabbed toolbar
* Adding and deleting notes
* Login view
* Synchronization with server


## Server (0.2.0)

The server uses the following technologies:

* Node.js
* Express
* Socket.io

The server will also provide a REST API for authentication using OAuth 2 and JSON Web Tokens, and a MongoDB database. It might also use TypeScript for type validation.
