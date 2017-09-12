import { h } from 'preact';

export default () => (
    <div class="ribbon">
        <div class="ribbon-tabs">
            <div class="ribbon-tab">File</div>
            <div class="ribbon-tab">Home</div>
            <div class="ribbon-tab">Insert</div>
            <div class="ribbon-tab">View</div>
            {/* Break */}
            <div class="user-name">Arvela, Tatu</div>
            <div class="search"><img src="../icon-search.png"/><input type="text" placeholder="Search..."/></div>
        </div>
        <div class="ribbon-toolbar">
            <div class="ribbon-toolbar-section">
                <p class="ribbon-toolbar-section-title">Clipboard</p>
            </div>
        </div>
    </div>
);