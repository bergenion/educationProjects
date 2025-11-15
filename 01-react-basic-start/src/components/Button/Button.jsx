import './Button.css';


export default function Button({children,onTouch,isActive}) {

    return (
        <button className={isActive ?'active button':'button'} onClick={onTouch}>{children}</button>
    )
}