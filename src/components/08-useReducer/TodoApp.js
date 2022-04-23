import React, { useEffect, useReducer, useRef } from 'react';

import '../../style.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
};

export const TodoApp = () => {
    const [todo, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    const handleDelete = (id) => {
        if (!id) {
            return;
        }
        const action = {
            type: 'delete',
            payload: id,
        };
        dispatch(action);
    };

    const handleToggle = (id) => {
        if (!id) {
            return;
        }
        const action = {
            type: 'toggle',
            payload: id,
        };

        dispatch(action);
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    };

    return (
        <div>
            <h1>Todo App ~ ({todo.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>

                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    );
};
