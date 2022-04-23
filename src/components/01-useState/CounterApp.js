import React from 'react';
import { useState } from 'react';

import './counter.css';

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50,
    });

    const { counter1, counter2, counter5 } = counter;

    // console.log(counter1);
    // console.log(counter2);
    return (
        <>
            <h1>Counter 1 {counter1}</h1>
            <h1>Counter 2 {counter2}</h1>
            <h1>Counter 5 {counter5}</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => {
                    setCounter({
                        ...counter,
                        counter1: counter1 + 1,
                        counter5: counter5 + 2,
                    });
                }}
            >
                +1
            </button>
        </>
    );
};
