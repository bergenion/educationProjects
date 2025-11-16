import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useEffect, useState} from "react";


export default function EffectSection() {
    // function openModal() {
    //     setModal(true)
    // }

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);




    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            setUsers(users);
            setLoading(false);
        }

        fetchUsers();
    }, [])


    return (
        <section>
            <h3>Effects</h3>
            <Button
                style={{marginBottom: "1rem"}}
                onClick={() => {
                setModal(true)
            }}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hello from Perm</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consectetur culpa earum eius enim
                    eum exercitationem illo nam nobis omnis perspiciatis reiciendis voluptates. Aspernatur ipsum nisi
                    odio ratione sequi.</p>
                <Button onClick={() => setModal(false)}>Закрыть информацию</Button>
            </Modal>

            {loading && <p>Loading...</p>}
            {!loading && <ul>
                {users.map(user => {
                    return (<li key={user.id} style={{display: "block"}}> {user.name} </li>)
                })}

            </ul>}
        </section>
    )
};