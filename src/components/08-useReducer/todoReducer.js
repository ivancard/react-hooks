export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
            break;
        case 'delete':
            return state.filter((item) => item.id !== action.payload);
            break;

        case 'toggle':
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, done: !item.done }
                    : item
            );
            break;

        default:
            return state;
            break;
    }
};
