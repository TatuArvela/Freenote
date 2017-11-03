import * as React from 'react';

export default class View extends React.Component { 
    render() {
        return (
            <div className="header-toolbar">
                <div className="header-toolbar-section">
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
                </div>
            </div>
        );
    }
}
