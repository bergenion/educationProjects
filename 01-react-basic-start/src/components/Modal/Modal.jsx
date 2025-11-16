import {createPortal} from "react-dom";
import './Modal.css'
import {useRef,useEffect} from "react";


export default function Modal({children,...props}) {


    const dialog= useRef();

    useEffect(() => {
        if ({...props}.open){
            dialog.current.showModal();
        }else{
            dialog.current.close()
        }
    }, [{...props}.open]);


    return createPortal(
        <dialog ref={dialog}>
            {children}
        </dialog>,document.getElementById("modal"))
}