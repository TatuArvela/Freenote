import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import io from 'socket.io-client'
import Header from '../../components/Header'
import Notes from '../../components/Notes'
import './style.scss'

const socket = io(`${window.location.protocol}//${window.location.hostname}:4000`)

const mapStateToProps = (state) => {
  const token = state.user.token
  return {
    token
  }
}

class App extends Component {
  render() {
    if (!this.props.token) {
      return <Redirect to="/login" />;
    }
    else return (
      <div className="App">
        <Header {...this.props} socket={socket} />
        <Notes {...this.props} socket={socket} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
