import { h } from 'preact';
import Note from './Note';

export default () => (
    <div class="notes">
        <div class="notes-grid">
            <Note title="To-do">
                Implement redux<br/>
                UI mockup features<br/>
                Sidebar<br/>
                File menu<br/>
                Toolbars<br/>
                Logo<br/>
                Login mockup UI<br/>
                Server configuration<br/>
                Basic server<br/>
                Login mockup service
            </Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
            <Note>Test</Note>
        </div>
    </div>
);