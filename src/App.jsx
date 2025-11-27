import {Navbar, Welcome, Dock} from '#components'
import gsap from 'gsap';
import {Terminal, Safari, Resume, Finder, Text, Image} from "#windows";


import { Draggable} from "gsap/Draggable"
gsap.registerPlugin(Draggable);


const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
        </main>
    )
}
export default App
