export function addNote(title, text) {
    return {
        type: 'ADD_TODO',
        title,
        text
    };
}

export function removeNote(note) {
    return {
        type: 'REMOVE_TODO',
        note
    };
}