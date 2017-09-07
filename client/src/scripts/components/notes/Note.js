import { h, Component } from 'preact';

export default class Note extends Component {
    shouldComponentUpdate({ todo, onRemove }) {
        return todo !== this.props.todo || onRemove !== this.props.onRemove;
    }

    remove = () => {
        let { onRemove, todo } = this.props;
        onRemove(todo);
    };

    render({ todo }) {
        return (
            <div class="note">
                <div class="note-content">
                    {todo.title &&
                        <h2>{todo.title}</h2>
                    }
                    <textarea class="note-textarea">{todo.text}</textarea>
                    
                </div>
                <div class="note-controls">
                    <button onClick={this.remove} class="note-button">SCRAP</button>
                </div>
            </div>
        )
    }
}