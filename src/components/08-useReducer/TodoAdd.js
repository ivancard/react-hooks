import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    const [{ text }, handleInputChange, reset] = useForm({ text: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length <= 0) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            text: text,
            done: false,
        };

        handleAddTodo(newTodo);
        reset();
    };
    return (
        <>
            <h4>Add Todo</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="Learn ..."
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={text}
                />

                <button
                    type="submit"
                    className="btn btn-warning mt-3 btn-block"
                >
                    Add
                </button>
            </form>
        </>
    );
};
