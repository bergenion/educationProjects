import {differences} from "../data.js";
import Button from "./Button/Button.jsx";
import {useState} from "react";

const buttonTexts = ['кнопка 1', 'кнопка 2', 'кнопка 3', 'кнопка 4'];


export default function () {
    const [content, setContent] = useState('nagmi na knopku');

    function handleClick(type) {
        setContent(type)
    }


    return <section><Button isActive={content === 'way'} onTouch={() => handleClick('way')}>{buttonTexts[0]}</Button>
        <Button isActive={content === 'easy'} onTouch={() => handleClick('easy')}>{buttonTexts[2]}</Button>
        <Button isActive={content === 'program'}
                onTouch={() => handleClick('program')}>{buttonTexts[3]}</Button>

        <p>{differences[content]}</p>
    </section>

}