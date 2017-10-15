import { NoteAction, NoteActionType } from '../actions/noteActions';
import { Note } from '../models/Note';

// var initState = localStorage.getItem('notesState');
// initState = initState ? JSON.parse(initState) : {notes: [{id: 0, note: 'Type with TypeScript'}]};
var initState = {notes: [{id: 0, note: 'Type with TypeScript'}]};

export interface NoteState {
    notes: Note[];
}

export default function notesReducer(state: NoteState = initState, action: NoteAction): NoteState {
    if (!action) {
        console.warn('Invalid action', action);
        return state;
    }
    switch (action.type) {
        case NoteActionType.ADD:
            state = {
                notes: [
                    ...state.notes,
                    Object.assign(
                        {},
                        action.note,
                        {id: state.notes.reduce((previous, current) => Math.max(previous, current.id !== undefined ? current.id : 0), 0) + 1}
                    )
                ]
            };
            break;
        case NoteActionType.REMOVE:
            state = {
                notes: [
                    ...state.notes.filter((note => note.id !== action.note.id))
                ]
            };
            break;
        default:
            console.warn('Unknown action', action);
    }

    window.localStorage.setItem('notesState', JSON.stringify(state));
    return state;
}
