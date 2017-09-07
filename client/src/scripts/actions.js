export function addTodo(title, text) {
    return {
        type: 'ADD_TODO',
        title,
        text
    };
}

export function removeTodo(todo) {
    return {
        type: 'REMOVE_TODO',
        todo
    };
}