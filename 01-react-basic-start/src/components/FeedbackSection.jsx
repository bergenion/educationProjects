import {useState, useRef} from "react";
import Button from "./Button/Button.jsx";

export default function FeedbackSection() {
    // const [name,setName]=useState('')
    // const [hasError,setHasError]=useState(false)
    // const [reason,setReason]=useState('help')

    function StateVsRef() {
        const input = useRef('');
        // const [value, setValue] = useState('');
        const [show, setShow] = useState('false');

        // let showValue = false;
        function handleKeyDown(event) {
            if (event.key === 'Enter') {
                setShow(true)
            }
        }

        return (
            <div>
                <h3>Input Value: {show && input.current.value}</h3>
                <input
                    ref={input}
                    className="control"
                    onKeyDown={handleKeyDown}
                    type="text"/>

            </div>
        )
    }


    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })

    function handleChangeName(event) {

        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        }))
    }

    // function handleChangeReason(event) {
    //     setForm(event.target.value);
    // }

    function toggleError() {
        // setHasError((prev)=>!prev)
        // setHasError((prev)=>!prev)
        // setHasError(!hasError)
    }

    return (
        <section className="feedback-section">
            <h3>Обратная связь</h3>
            <Button onClick={toggleError}>toggleError</Button>
            <form onSubmit={(e) => e.nativeEvent.preventDefault()}>
                <label htmlFor="name">Ваше имя</label>
                <input id="name"
                       style={{
                           border: form.hasError ? '1px solid red' : ''
                       }}
                       className="control"
                       type="text"
                       value={form.name}
                       onChange={handleChangeName}/>
                <label htmlFor="reason">Причина обращения</label>
                <select className="control"
                        id="reason"
                        onChange={(event) => {
                            setForm((prev) =>
                                ({
                                    ...prev,
                                    reason: event.target.value
                                }))
                        }}
                        value={form.reason}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложения</option>
                </select>

                <Button style={{marginBottom: '1rem'}} disabled={form.hasError}>Отправить</Button>
                {/*<pre >*/}
                {/*    Name: {form.name}*/}
                {/*    <br/>*/}
                {/*    Reason: {form.reason}*/}

                {/*    {JSON.stringify(form, null, 2)}*/}
                {/*</pre>*/}
                <StateVsRef></StateVsRef>
            </form>
        </section>
    )
}