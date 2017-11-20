import React, { Component } from 'react'
import io from 'socket.io-client'
import Header from '../../components/Header'
import Notes from '../../components/Notes'
import './style.scss'

const socket = io(`${window.location.protocol}//${window.location.hostname}:4000`)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header {...this.props} socket={socket} />
        <Notes {...this.props} socket={socket} />
      </div>
    )
  }
}

export default App
