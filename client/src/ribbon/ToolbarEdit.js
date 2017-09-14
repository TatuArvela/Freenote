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
                        <i class="material-icons">note_add</i>
                        <span>Note</span>
                    </button>
                    <span class="ribbon-toolbar-column">
                        <span class="ribbon-toolbar-row">
                            <select class="ribbon-toolbar-select">
                                <option>Red</option>
                                <option>Green</option>
                                <option>Blue</option>
                            </select>
                        </span>
                        <span class="ribbon-toolbar-row">
                            <select multiple class="ribbon-toolbar-select">
                                <option>No tag</option>
                                <option>Work</option>
                                <option>Important</option>
                                <option>Learning</option>
                            </select>
                            <button class="ribbon-toolbar-button small"><i class="material-icons">add</i></button>
                        </span>
                    </span>
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
                        <select class="ribbon-toolbar-select">
                            <option>Red</option>
                            <option>Green</option>
                            <option>Blue</option>
                        </select>
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