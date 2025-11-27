import {Navbar, Welcome, Dock} from '#components'
import gsap from 'gsap';
import {Terminal, Safari, Resume} from "#windows";


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
        </main>
    )
}
export default App
