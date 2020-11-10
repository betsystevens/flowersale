import React, { useState, useEffect } from 'react';

export default function useItems(collType) {
    const [items, setItems] = useState([]);

    async function getData() {
        const response = await fetch("http://localhost:3000/" + collType);
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        getData();
    }, [collType]);

    return items;
}