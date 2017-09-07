import { h } from 'preact';
import WindowControls from './WindowControls';
import Ribbon from './Ribbon';

export default () => (
    <div class="header">
        <WindowControls />
        <Ribbon />
    </div>
);