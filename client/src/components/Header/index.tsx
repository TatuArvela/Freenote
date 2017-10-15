import * as React from 'react';

import Toolbars from './Toolbars';

import './style.scss';

class Header extends React.Component {
    render() {
        return (
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

                <Toolbars />
                
                {/* <div class="header-toolbar">
                    <div class="header-toolbar-section">
                        Select board, New board
                        <p class="header-toolbar-section-title">Boards</p>
                    </div>
                    <div class="header-toolbar-section">
                        Show tag, New tag
                        <p class="header-toolbar-section-title">Tags</p>
                    </div>
                    <div class="header-toolbar-section">
                        Rows, List
                        <p class="header-toolbar-section-title">Display</p>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Header;
