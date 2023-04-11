import { sortTodos } from "../helper/index.js"
const initialState = {
    todos: []
}
const TodoReducer = (state = initialState, action)=>{
    let updatedTodos
    switch (action.type) {
        case 'ADD_TODO':
        case 'UPDATE_TODO':
        case 'READ_TODO':
        case 'EDIT_TODO':
        case 'REMOVE_TODO':
            updatedTodos = sortTodos(action.todos)
            return {
                todos: updatedTodos
            }
        default:
            return state


    }
}
export default TodoReducer;

