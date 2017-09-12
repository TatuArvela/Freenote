import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from './util';
import reduce from './reducers';
import Header from '../header/Header'
import Notes from '../note/Notes'
import Note from '../note/Note'
import * as NoteActions from '../note/NoteActions';

import style from './app.scss';

@connect(reduce, bindActions(NoteActions))
export default class App extends Component {
    addTodos = () => {
        const { title, text } = this.state;
        this.setState({ 
            title: '',
            text: '' 
        });
        this.props.addTodo(title, text);
        return false;
    };

    removeTodo = (todo) => {
        this.props.removeTodo(todo);
    };

    updateTitle = (e) => {
        this.setState({ title: e.target.value });
    };

    updateText = (e) => {
        this.setState({ text: e.target.value });
    };

    render({todos}, {title, text}) {
        return (
            <div class="app">
                <Header />

                <Notes>
                    <form onSubmit={this.addTodos} action="javascript:" class="note note-new">
                        <div class="note-content">
                            <input class="note-title" value={title} onInput={this.updateTitle} placeholder="Title"/>
                            <textarea class="note-textarea" value={text} onInput={this.updateText} placeholder="Write a new note">
                            </textarea>
                        </div>
                        <div class="note-controls">
                            <button class="note-button" type="submit">ADD</button>
                        </div>
                    </form>

                    {[...todos].reverse().map(todo => (
                        <Note key={todo.id} todo={todo} onRemove={this.removeTodo} />
                    ))}
                </Notes>
            </div>
        );
    }
}