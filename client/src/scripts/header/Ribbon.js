import { h } from 'preact';

export default () => (
    <div class="ribbon">
        <div class="ribbon-tabs">
            <div class="ribbon-tab">File</div>
            <div class="ribbon-tab active">Home</div>
            <div class="ribbon-tab">Insert</div>
            <div class="user-name">Arvela, Tatu</div>
        </div>
        <div class="ribbon-toolbar">
            <div class="ribbon-toolbar-section">
                <p class="ribbon-toolbar-section-title">Clipboard</p>
            </div>
        </div>
    </div>
);