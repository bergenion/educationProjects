import logo from '/logo-name.svg';
import './Header.css'

import {useState} from "react"
export default function Header() {
    const [time,setTime]=useState(new Date().toLocaleTimeString())
    setInterval(()=>{

        setTime(new Date().toLocaleTimeString());
    },1000);
    return (
        <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="Не получилось загрузить картинку!" />*/}
            <img src={logo} className="App-logo" alt="Result" />
            {/*<h3>Result University</h3>*/}
            <span>Время сейчас: {time}</span>
        </header>
    )
}
