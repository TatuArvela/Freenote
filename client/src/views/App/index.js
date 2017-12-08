import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { readCookie } from '../../actions/user'
import io from 'socket.io-client'
import Header from '../../components/Header'
import Notes from '../../components/Notes'
import './style.scss'

const socket = io(`${window.location.protocol}//${window.location.hostname}:4000`)

const mapStateToProps = (state) => {
  const token = state.user.token
  const loading = state.user.loading
  return { token, loading }
}

const mapDispatchToProps = (dispatch) => {
  return {
    readCookie: () => {
      dispatch(readCookie())
    }
  }
}

class App extends Component {
  componentDidMount() {
    this.props.readCookie()
  }

  render() {
    if (!this.props.loading) {
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
    else return (
      <div></div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
