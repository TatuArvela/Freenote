import { h, Component } from 'preact';

export default class AddNote extends Component {
    render() {
        return (
            <div class="ribbon">
                <div class="ribbon-tabs">
                    <h1 class="window-title">Development - Freenote</h1>

                    <div class="ribbon-tab active">Edit</div>
                    <div class="ribbon-tab">View</div>
                    
                    <div class="user-name">Arvela, Tatu</div>
                    <div class="search"><i class="material-icons">search</i><input type="text" placeholder="Search..."/></div>
                </div>
                <div class="ribbon-toolbar">
                    <div class="ribbon-toolbar-section">
                        <button class="ribbon-toolbar-column ribbon-toolbar-button">
                            <i class="material-icons">add</i>
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
                                <select class="ribbon-toolbar-select">
                                    <option>Red</option>
                                    <option>Green</option>
                                    <option>Blue</option>
                                </select>
                            </span>
                        </span>
                        <p class="ribbon-toolbar-section-title">Notes</p>
                    </div>
                    <div class="ribbon-toolbar-section">
                        <span class="ribbon-toolbar-row">
                            <select class="ribbon-toolbar-select">
                                <option>Noto Sans</option>
                            </select>
                        </span>
                        <span class="ribbon-toolbar-row">
                            <button class="ribbon-toolbar-button small"><i class="material-icons">format_bold</i></button>
                            <button class="ribbon-toolbar-button small"><i class="material-icons">format_italic</i></button>
                            <button class="ribbon-toolbar-button small"><i class="material-icons">format_underline</i></button>
                        </span>
                        <p class="ribbon-toolbar-section-title">Font</p>
                    </div>
                    <div class="ribbon-toolbar-section">
                        <span class="ribbon-toolbar-row">
                            <select class="ribbon-toolbar-select">
                                <option>Test</option>
                            </select>
                        </span>
                        <span class="ribbon-toolbar-row">
                            <button class="ribbon-toolbar-button"><i class="material-icons">warning</i>Testing widths</button>
                        </span>
                        <p class="ribbon-toolbar-section-title">Test</p>
                    </div>
                </div>
                {/* <div class="ribbon-toolbar">
                    <div class="ribbon-toolbar-section">
                        Select board, New board
                        <p class="ribbon-toolbar-section-title">Boards</p>
                    </div>
                    <div class="ribbon-toolbar-section">
                        Show tag, New tag
                        <p class="ribbon-toolbar-section-title">Tags</p>
                    </div>
                    <div class="ribbon-toolbar-section">
                        Rows, List
                        <p class="ribbon-toolbar-section-title">Display</p>
                    </div>
                </div> */}
            </div>
        )
    }
}