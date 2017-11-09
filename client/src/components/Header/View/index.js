import * as React from 'react';
import FilterLink from './FilterLink'

export default class View extends React.Component {
  render() {
    return (
      <div className="header-toolbar">
        <div className="header-toolbar-section">
          <span className="header-toolbar-row">
            <FilterLink filter="SHOW_ACTIVE">
              <i className="material-icons">visibility</i>
            </FilterLink>
            <FilterLink filter="SHOW_DELETED">
              <i className="material-icons">delete</i>
            </FilterLink>
            <FilterLink filter="SHOW_ALL">
              <i className="material-icons">all_inclusive</i>
            </FilterLink>
          </span>
          <p className="button-group-title">Filter</p>
        </div>

        {/* <div className="header-toolbar-section">
          Select board, New board
          <p className="header-toolbar-section-title">Boards</p>
        </div>

        <div className="header-toolbar-section">
          Show tag, New tag
          <p className="header-toolbar-section-title">Tags</p>
        </div>

        <div className="header-toolbar-section">
          Rows, List
          <p className="header-toolbar-section-title">Display</p>
        </div> */}
      </div>
    );
  }
}
