import React, { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('Small render');
    return <small>{value}</small>;
});
