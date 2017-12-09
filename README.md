![Freenote icon](./logo.png?raw=true "Freenote")

Freenote is an open-source note-taking application. It consists of three parts: a web client, a server and a database, which are deployed together using Docker.

The main goal of this project was to learn modern web development technologies, most importantly Redux, Docker and Mongo.



## Production server

The application is deployed on my DigitalOcean server. This version has major issues with input synchronization which need to be sorted out.

[Demo](http://tatuarvela.com:3000)

Username: **tatu**

Password: **salasana**


## Client (1.0.0)

The web client uses the following technologies:

* Webpack
* React
* Redux
* React Router
* Redux Thunk
* Sass
* Socket.io
* js-cookie
<!-- * Jest -->

The web client's user interface is a mix of Google's Material Design and a tabbed toolbar.

### Features
* Tabbed toolbar
* Adding and deleting notes
* Login view
* Synchronization with server



## Server (1.0.0)

The server uses the following technologies:

* Node.js
* Express
* Socket.io
* Mongoose
* Bluebird
* Chalk
* jsonwebtoken
* bcrypt
<!-- * Mocha -->
<!-- * Chai -->



## Credits

I found these tutorials/projects very helpful:
* https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
* http://redux.js.org/docs/basics/ExampleTodoList.html
* https://github.com/reactjs/redux/blob/master/docs/advanced/ExampleRedditAPI.md
* https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
* https://github.com/raineroviir/react-redux-socketio-chat/
