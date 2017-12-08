import React from 'react'
import { connect } from 'react-redux'
import { switchTab } from '../../actions/toolbar'
import { logout } from '../../actions/user'
import Edit from './Edit';
import View from './View';
import './style.scss';

const mapStateToProps = state => {
  return {
    toolbar: state.toolbar
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchTab: (tab) => {
      dispatch(switchTab(tab))
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

let Header = ({toolbar, switchTab, logout}) => (
  <div className="header">
    <h1 className="window-title">Freenote</h1>

    {/* TODO: Make this a component of its own, and add in user info */}
    <div className="user-name" onClick={() => logout()}>Log out</div>
    <div className="user-icon" onClick={() => logout()}>
      <i className="material-icons">person</i>
    </div>

    <div className="search">
        <i className="material-icons">search</i>
        <input type="text" placeholder="Search..."/>
    </div>

    <a
      className={`header-tab ${toolbar === 'EDIT' ? 'active' : ''}`}
      onClick={() => switchTab('EDIT')}
    >Edit</a>

    <a
      className={`header-tab ${toolbar === 'VIEW' ? 'active' : ''}`}
      onClick={() => switchTab('VIEW')}
    >View</a>

    {toolbar === "EDIT" &&
      <Edit />
    }

    {toolbar === "VIEW" &&
      <View />
    }

  </div>
)

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default Header
