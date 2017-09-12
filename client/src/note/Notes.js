import { h, Component } from 'preact';
import Note from './Note';

export default class Notes extends Component {
    render() {
        return (
            <div class="notes">
                <div class="notes-grid">
                    {this.props.children}
                </div>
            </div>
        )
    }
}