import { createStore } from 'redux';

let ACTIONS = {
    ADD_TODO: ({ notes, ...state }, { title, text }) => ({
        notes: [...notes, {
            id: Math.random().toString(36).substring(2),
            title,
            text
        }],
        ...state
    }),

    REMOVE_TODO: ({ notes, ...state }, { note }) => ({
        notes: notes.filter( i => i!==note ),
        ...state
    })
};

const INITIAL = {
    notes: []
};

export default createStore( (state, action) => (
    action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());