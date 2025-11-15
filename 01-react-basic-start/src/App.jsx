import Header from "./components/Header/Header.jsx"
import TeachingSection from "./components/TeachingSection.jsx";
import ButtonSections from "./components/ButtonsSection"
import {Fragment, useState} from "react";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";

export default function App() {

    const [tab, setTab] = useState('feedback');
// debugger;

    return (
        <Fragment>
            <Header/>
            <main className="App-main">
                <IntroSection/>

                <TabsSection active={tab} onChange={function (current) {
                    debugger;
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


            </main>
        </Fragment>)
}


