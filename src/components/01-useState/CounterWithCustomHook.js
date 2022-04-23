import React from 'react';
import { useCounter } from '../../hooks/useCoounter';

import './counter.css';

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();
    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />

            <button
                onClick={() => {
                    decrement(1);
                }}
                className="btn btn-success"
            >
                - 1
            </button>

            <button onClick={reset} className="btn btn-success">
                RESET
            </button>

            <button
                onClick={() => {
                    increment(2);
                }}
                className="btn btn-success"
            >
                + 1
            </button>
        </>
    );
};
