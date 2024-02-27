import React from "react";
import {useEffect} from "react";

export default function Effect() {
    useEffect(() => {
        console.log('Результат');
    }, []);

    return (
        <div>
            <p>Привет, мир!</p>
        </div>
    );
}