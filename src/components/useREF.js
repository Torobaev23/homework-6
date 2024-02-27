import React from "react";
import {useRef} from "react";

export default function Form() {
    const nameField = useRef (null);
    const send = () => {
        const inputElement = nameField.current;
        console.log("Имя: " + inputElement.value);
    };
    return (
        <div>
            <input type="text" ref={nameField} />
            <button onClick={send}>Отправить</button>
        </div>
    );
}