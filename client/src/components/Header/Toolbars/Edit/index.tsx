import * as React from 'react';
// import { connect } from 'preact-redux';

// import reduce from '../app/reducers';
// import * as noteActions from '../note/noteActions';

// import '../Header/style.scss';

// @connect(reduce, {...noteActions})
export default class ToolbarEdit extends React.Component {

    // addNote = () => {
    //     const { title, text } = this.state;
    //     this.setState({ 
    //         title: '',
    //         text: '' 
    //     });
    //     this.props.addNote(title, text);
    //     return false;
    // };

    render() {
        return (
            <div className="header-toolbar">
                <div className="header-toolbar-section">
                    <button className="header-toolbar-button big">
                    {/* <button className="header-toolbar-button big" onClick={this.addNote}> */}
                        <i className="material-icons green">note_add</i>
                        <span className="button-title">New Note</span>
                    </button>
                    <button className="header-toolbar-button big">
                        <i className="material-icons">
                            colorize
                            <div className="colorbox"/>
                        </i>
                        <span className="button-title">Color</span>
                        <span className="material-icons button-expand">expand_more</span>
                    </button>
                    <button className="header-toolbar-button big">
                        <i className="material-icons">layers</i>
                        <span className="button-title">Stack</span>
                        <span className="material-icons button-expand">expand_more</span>
                    </button>
                    <button className="header-toolbar-button big">
                        <i className="material-icons">local_offer</i>
                        <span className="button-title">Tags</span>
                        <span className="material-icons button-expand">expand_more</span>
                    </button>
                </div>
                <div className="header-toolbar-section">
                    <div className="header-toolbar-column">
                        <span className="header-toolbar-row">
                            <select className="header-toolbar-select">
                                <option>Noto Sans</option>
                            </select>
                            <select className="header-toolbar-select">
                                <option>12</option>
                            </select>
                        </span>
                        <span className="header-toolbar-row">
                            <button className="header-toolbar-button small">
                                <i className="material-icons">format_bold</i>
                            </button>
                            <button className="header-toolbar-button small">
                                <i className="material-icons">format_italic</i>
                            </button>
                            <button className="header-toolbar-button small">
                                <i className="material-icons">format_underline</i>
                            </button>
                            <div className="divider"/>
                            <button className="header-toolbar-button small">
                                <i className="material-icons">
                                    colorize
                                    <div className="colorbox"/>
                                </i>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="header-toolbar-section">
                    <div className="header-toolbar-column">
                        <span className="header-toolbar-row">
                            <select className="header-toolbar-select full-width">
                                <option>Test</option>
                            </select>
                        </span>
                        <span className="header-toolbar-row">
                            <button className="header-toolbar-button">
                                <i className="material-icons">warning</i>
                                Testing widths
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
