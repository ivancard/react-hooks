import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCoounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {
    const { counter, increment } = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { data } = useFetch(url);

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout effects</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-4">
                    {quote}
                </p>
            </blockquote>

            <pre className="pre-scrollable">
                <code>{JSON.stringify(boxSize, null, 3)}</code>
            </pre>

            <button className="btn btn-warning" onClick={increment}>
                Next quote
            </button>
        </div>
    );
};
