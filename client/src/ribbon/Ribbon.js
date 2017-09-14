import { h, Component } from 'preact'
import ToolbarEdit from './ToolbarEdit'

export default class Ribbon extends Component {
    render() {
        return (
            <div class="ribbon">
                <div class="ribbon-tabs">
                    <h1 class="window-title">Development - Freenote</h1>

                    <div class="ribbon-tab active">Edit</div>
                    <div class="ribbon-tab">View</div>
                    <div class="search"><i class="material-icons">search</i><input type="text" placeholder="Search..."/></div>
                    
                    <div class="user-name">Arvela, Tatu</div>
                </div>

                <ToolbarEdit />
                
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