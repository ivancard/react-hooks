const initialState = [
    {
        id: 1,
        todo: 'Learn React',
        done: false,
    },
];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Learn React Native',
    done: false,
};

const addTodoAction = {
    type: 'add',
    payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log('🚀 ~ file: intro-reducer.js ~ line 14 ~ todos', todos);
