import React from 'react'

import Toolbars from './Toolbars';
import FilterLink from './FilterLink'
import AddNote from './AddNote'

import './style.scss';

const Header = () => (
  <div className="header">
    <div className="header-tabs">
        <h1 className="window-title">Development - Freenote</h1>

        <a href="#" className="header-tab active">Edit</a>
        <a href="#" className="header-tab">View</a>
        <div className="search">
            <i className="material-icons">search</i>
            <input type="text" placeholder="Search..."/>
        </div>
        
        <div className="user-name">Tatu Arvela</div>
    </div>

    {/* <Toolbars /> */}

    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_DELETED">
        Deleted
      </FilterLink>
    </p>

    <AddNote />
  </div>
)

export default Header
