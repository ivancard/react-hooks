import React, { useEffect, useState } from 'react';

export const Messaje = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const { x, y } = coords;

    useEffect(() => {
        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y };
            setCoords(coors);
            // console.log(coors);
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <div>
            <h1>You're great!</h1>
            <p>
                X: {x} - Y: {y}
            </p>
        </div>
    );
};
