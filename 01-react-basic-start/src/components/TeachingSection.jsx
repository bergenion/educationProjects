import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

export default function () {
    return <section className="App-section">
        <h3>Наш подход к обучению</h3>
        <ul>
            {ways.map((way,index)=> <WayToTeach key={index} {...way}/>)}
        </ul>
    </section>
}