import ActionTypes from '../actionTypes';

const iniatialState = {
    todos: []
}

const { ADD, DELETE, UPDATE } = ActionTypes;

const todoReducer = (state = iniatialState, action) => {

    switch (action.type) {
        case ADD:
            return { ...state, todos: state.todos.concat(action.payload) };

        case DELETE:
            const filtered = state.todos.filter((i) => i.id != action.payload);
            return { ...state, todos: filtered }

        case UPDATE:
            const updated = state.todos.map((i) => i.id === action.payload.id ? action.payload : i);
            return { ...state, todos: updated }

        default:
            return state;
    }

}

export default todoReducer;