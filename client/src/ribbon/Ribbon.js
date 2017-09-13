import { h } from 'preact';

export default () => (
    <div class="ribbon">
        <div class="ribbon-tabs">
            <h1 class="window-title">Development - Freenote</h1>

            <div class="ribbon-tab">Edit</div>
            <div class="ribbon-tab">View</div>
            
            <div class="user-name">Arvela, Tatu</div>
            <div class="search"><img src="../icon-search.png"/><input type="text" placeholder="Search..."/></div>
        </div>
        {/* <div class="ribbon-toolbar">
            <div class="ribbon-toolbar-section">
                Color, Bold, Italic
                <p class="ribbon-toolbar-section-title">Content style</p>
            </div>
            <div class="ribbon-toolbar-section">
                Note color
                <p class="ribbon-toolbar-section-title">Appearance</p>
            </div>
        </div> */}
        <div class="ribbon-toolbar">
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
        </div>
    </div>
);