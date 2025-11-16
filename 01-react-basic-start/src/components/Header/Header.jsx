import logo from '/logo-name.svg';
import classes from './Header.module.css';
import {styled} from 'styled-components';
import {useEffect, useState} from "react";

console.log(classes);
const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header() {


    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    // setInterval(()=>{
    //
    //     setTime(new Date().toLocaleTimeString());
    // },1000);
    return (
        <HeaderContainer className="App-header">
            {/*<img src={logo} className="App-logo" alt="Не получилось загрузить картинку!" />*/}
            <img src={logo} className="App-logo" alt="Result"/>
            {/*<h3>Result University</h3>*/}
           <span>Время сейчас: {time}</span>
        </HeaderContainer>
    )
}
