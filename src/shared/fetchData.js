import { useState, useEffect } from 'react';
import { baseUrl } from './config';

export default function useItems(endpoint) {
    const [items, setItems] = useState([]);

    async function getData() {
        const response = await fetch(baseUrl + endpoint);
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        getData();
    }, [endpoint]);

    return (Array.isArray(items)) ? items : [items];
}