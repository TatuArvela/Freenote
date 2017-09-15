import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import reduce from '../app/reducers';
import * as noteActions from '../note/noteActions';

@connect(reduce, {...noteActions})
export default class ToolbarEdit extends Component {

    addNote = () => {
        const { title, text } = this.state;
        this.setState({ 
            title: '',
            text: '' 
        });
        this.props.addNote(title, text);
        return false;
    };

    render() {
        return (
            <div class="header-toolbar">
                <div class="header-toolbar-section">
                    <button class="header-toolbar-column header-toolbar-button" onClick={this.addNote}>
                        <i class="material-icons green">note_add</i>
                        <span class="button-title">New Note</span>
                    </button>
                    <button class="header-toolbar-column header-toolbar-button">
                        <i class="material-icons"><div class="colorbox"></div>colorize</i>
                        <span class="button-title">Color</span>
                        <span class="material-icons header-toolbar-button-expand">expand_more</span>
                    </button>
                    <button class="header-toolbar-column header-toolbar-button">
                        <i class="material-icons">layers</i>
                        <span class="button-title">Stack</span>
                        <span class="material-icons header-toolbar-button-expand">expand_more</span>
                    </button>
                    <button class="header-toolbar-column header-toolbar-button">
                        <i class="material-icons">local_offer</i>
                        <span class="button-title">Tags</span>
                        <span class="material-icons header-toolbar-button-expand">expand_more</span>
                    </button>
                </div>
                <div class="header-toolbar-section">
                    <div class="header-toolbar-column">
                        <span class="header-toolbar-row">
                            <select class="header-toolbar-select">
                                <option>Noto Sans</option>
                            </select>&nbsp;
                            <select class="header-toolbar-select">
                                <option>12</option>
                            </select>
                        </span>
                        <span class="header-toolbar-row">
                            <button class="header-toolbar-button small"><i class="material-icons">format_bold</i></button>
                            <button class="header-toolbar-button small"><i class="material-icons">format_italic</i></button>
                            <button class="header-toolbar-button small"><i class="material-icons">format_underline</i></button>
                            <div class="divider"></div>
                            <button class="header-toolbar-button small">
                                <i class="material-icons">colorize<div class="colorbox"></div></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="header-toolbar-section">
                    <div class="header-toolbar-column">
                        <span class="header-toolbar-row">
                            <select class="header-toolbar-select full-width">
                                <option>Test</option>
                            </select>
                        </span>
                        <span class="header-toolbar-row">
                            <button class="header-toolbar-button"><i class="material-icons">warning</i>Testing widths</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}