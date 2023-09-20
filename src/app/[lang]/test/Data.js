'use client';

import { useEffect } from 'react';

export default function Data({ data }) {
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>Test</div>
    )
}