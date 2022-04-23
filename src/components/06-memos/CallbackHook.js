import React, { useState, useCallback } from 'react';

import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCount] = useState(10);

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, [setCount]);

    return (
        <div>
            <h1>CallbackHook: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    );
};
