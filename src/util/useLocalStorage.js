import { useState, useEffect } from 'react'

export function useLocalState(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const auth = localStorage.getItem(key);
        return auth !== null ? JSON.parse(auth) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue];
}

