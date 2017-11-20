import React from 'react'
import { connect } from 'react-redux'
import { switchTab } from '../../actions/toolbar'
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
    }
  }
}

let Header = ({ toolbar, switchTab }) => (
  <div className="header">
    <div className="header-tabs">
        <h1 className="window-title">Freenote</h1>

        <a
          className={`header-tab ${toolbar === 'EDIT' ? 'active' : ''}`}
          onClick={() => switchTab('EDIT')}
        >Edit</a>

        <a
          className={`header-tab ${toolbar === 'VIEW' ? 'active' : ''}`}
          onClick={() => switchTab('VIEW')}
        >View</a>

        <div className="search">
            <i className="material-icons">search</i>
            <input type="text" placeholder="Search..."/>
        </div>
        
        <div className="user-name">Tatu Arvela</div>
    </div>

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
