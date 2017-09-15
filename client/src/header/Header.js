import { h, Component } from 'preact'
import ToolbarEdit from './ToolbarEdit'

export default class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="header-tabs">
                    <h1 class="window-title">Development - Freenote</h1>

                    <div class="header-tab active">Edit</div>
                    <div class="header-tab">View</div>
                    <div class="search"><i class="material-icons">search</i><input type="text" placeholder="Search..."/></div>
                    
                    <div class="user-name">Arvela, Tatu</div>
                </div>

                <ToolbarEdit />
                
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
        )
    }
}