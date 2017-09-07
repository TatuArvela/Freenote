# Freenote ![Freenote icon](Freenote.png?raw=true "Freenote") 
An open-source note-taking application. A personal alternative to *Google Keep* or *Microsoft OneNote*.

## Client
The client adorns a *Microsoft Ribbon* style user interface, and is built using *Node.js*, *Webpack*, *Babel*, *Preact*, *Redux* and *Sass*.

I must give credit to these great reference projects: 
* https://github.com/developit/zero-to-preact
* https://github.com/developit/preact-redux-example

### TODO
#### Basic UI
* Toolbars
* Sidebar
* File menu
* Animations

#### Notes
* Titles
* Tags
* Pinning
* Checkboxes

#### Features
* Search
* Login mockup
* Synchronization
* Drag to reorder

## Server
The server provides a *REST API* for authentication using *OAuth 2* and *JSON Web Tokens*, and a *WebSocket* service for interacting with the *MongoDB* database.

### TODO
* Server configuration
* Basic server features
* Login mockup service
* Save mockup service