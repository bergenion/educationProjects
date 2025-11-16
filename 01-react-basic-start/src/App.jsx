import Header from "./components/Header/Header.jsx"
import TeachingSection from "./components/TeachingSection.jsx";
import ButtonSections from "./components/ButtonsSection"
import {Fragment, useState} from "react";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import EffectSection from "./components/EffectSection.jsx";

export default function App() {

    const [tab, setTab] = useState('effects');
// debugger;


    // setTimeout(()=>{
    //     setShowHeader(false)
    // },3000)
    const [showHeader, setShowHeader] = useState(true);

    return (
        <Fragment>
            {showHeader && <Header/>}
            <main className="App-main">
                <IntroSection/>

                <TabsSection active={tab} onChange={function (current) {
                    // debugger;
                    setTab(current);
                }}/>

                {tab === 'main' && (
                    <>
                        <TeachingSection/>
                        <ButtonSections/>
                    </>
                )}

                {tab === 'feedback' && (
                    <>
                        <FeedbackSection/>
                    </>
                )}
                {tab === 'effects' && (
                    <>
                        <EffectSection/>
                    </>
                )}


            </main>
        </Fragment>)
}


