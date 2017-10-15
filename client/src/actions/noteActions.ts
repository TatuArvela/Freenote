import { Note } from '../models/Note';

export enum NoteActionType {
    ADD,
    REMOVE
}

export interface NoteAction {
    type: NoteActionType;
    note: Note;
}

export function addNoteAction(text: string): NoteAction {
    return {
        type: NoteActionType.ADD,
        note: {
            id: 0,
            note: text
        }
    };
}

export function removeNoteAction(note: Note): NoteAction {
    return {
        type: NoteActionType.REMOVE,
        note: note
    };
}
