// import { h, Component } from 'preact';

// import Header from '../components/header/Header';
// import Notes from '../components/notes/Notes';

// export default class App extends Component {
//     render() {
//         return (
//             <div class="app">
//                 <Header />
//                 <Notes />
//             </div>
//         );
//     }
// }

import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { bindActions } from '../util';
import reduce from '../reducers';
import * as actions from '../actions';

import Header from '../components/header/Header'
import Notes from '../components/notes/Notes'
import Note from '../components/notes/Note'

@connect(reduce, bindActions(actions))
export default class App extends Component {
    addTodos = () => {
        const { text } = this.state;
        this.setState({ text: '' });
        this.props.addTodo(text);
        return false;
    };

    removeTodo = (todo) => {
        this.props.removeTodo(todo);
    };

    updateText = (e) => {
        this.setState({ text: e.target.value });
    };

    render({todos}, {text}) {
        return (
            <div class="container">
                <Header />

                <Notes>
                    <form onSubmit={this.addTodos} action="javascript:" class="note note-new">
                        <div class="note-content">
                            <textarea value={text} onInput={this.updateText} placeholder="Write a new note" class="note-textarea">
                            </textarea>
                        </div>
                        <div class="note-controls">
                            <button type="submit" class="note-button">ADD</button>
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