import { h } from 'preact';

export default (props) => (
    <div class="note note-small">
        <div class="note-content">
            {props.title &&
                <h2>{props.title}</h2>
            }
            <p>{props.children}</p>
        </div>
    </div>
);