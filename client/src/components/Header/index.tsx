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
            </div>
        );
    }
}

export default Header;
