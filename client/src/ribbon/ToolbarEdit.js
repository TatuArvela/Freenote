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
            <div class="ribbon-toolbar">
                <div class="ribbon-toolbar-section">
                    <button class="ribbon-toolbar-column ribbon-toolbar-button" onClick={this.addNote}>
                        <i class="material-icons green">note_add</i>
                        <span class="button-title">New Note</span>
                    </button>
                    <button class="ribbon-toolbar-column ribbon-toolbar-button">
                        <i class="material-icons"><div class="colorbox"></div>colorize</i>
                        <span class="button-title">Color</span>
                        <span class="material-icons ribbon-toolbar-button-expand">expand_more</span>
                    </button>
                    <button class="ribbon-toolbar-column ribbon-toolbar-button">
                        <i class="material-icons">layers</i>
                        <span class="button-title">Stack</span>
                        <span class="material-icons ribbon-toolbar-button-expand">expand_more</span>
                    </button>
                    <button class="ribbon-toolbar-column ribbon-toolbar-button">
                        <i class="material-icons">local_offer</i>
                        <span class="button-title">Tags</span>
                        <span class="material-icons ribbon-toolbar-button-expand">expand_more</span>
                    </button>
                    <p class="ribbon-toolbar-section-title">Notes</p>
                </div>
                <div class="ribbon-toolbar-section">
                    <span class="ribbon-toolbar-row">
                        <select class="ribbon-toolbar-select">
                            <option>Noto Sans</option>
                        </select>&nbsp;
                        <select class="ribbon-toolbar-select">
                            <option>12</option>
                        </select>
                    </span>
                    <span class="ribbon-toolbar-row">
                        <button class="ribbon-toolbar-button small"><i class="material-icons">format_bold</i></button>
                        <button class="ribbon-toolbar-button small"><i class="material-icons">format_italic</i></button>
                        <button class="ribbon-toolbar-button small"><i class="material-icons">format_underline</i></button>
                        <div class="divider"></div>
                        <button class="ribbon-toolbar-button small">
                            <i class="material-icons">colorize<div class="colorbox"></div></i>
                        </button>
                    </span>
                    <p class="ribbon-toolbar-section-title">Font</p>
                </div>
                <div class="ribbon-toolbar-section">
                    <span class="ribbon-toolbar-row">
                        <select class="ribbon-toolbar-select full-width">
                            <option>Test</option>
                        </select>
                    </span>
                    <span class="ribbon-toolbar-row">
                        <button class="ribbon-toolbar-button"><i class="material-icons">warning</i>Testing widths</button>
                    </span>
                    <p class="ribbon-toolbar-section-title">Test</p>
                </div>
            </div>
        )
    }
}