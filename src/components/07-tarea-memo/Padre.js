import React from 'react';
import { Son } from './Hijo';
import { useState, useCallback } from 'react';

import '../02-useEffect/effects.css';

export const Padre = () => {
    const numbers = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const increment = useCallback(
        (num) => {
            setValor((v) => v + num);
        },
        [setValor]
    );

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {numbers.map((n) => (
                <Son key={n} number={n} increment={increment} />
            ))}
            {/* <Son /> */}
        </div>
    );
};
