import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCoounter';
import { heavyProcess } from '../../helpers/heavyProcess';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(3000);
    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>
                Counter:<small>{counter}</small>
            </h3>
            <hr />

            <p>{memoHeavyProcess}</p>

            <button className="btn btn-warning" onClick={increment}>
                +1
            </button>

            <button
                className=" btn btn-warning "
                style={{ marginLeft: '10px' }}
                onClick={() => {
                    setShow(!show);
                }}
            >
                {show ? 'show' : 'hide'} ~ {JSON.stringify(show)}
            </button>
        </div>
    );
};
