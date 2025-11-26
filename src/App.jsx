import {Navbar, Welcome, Dock} from '#components'
import gsap from 'gsap';
import Terminal from "#windows/index"

import { Draggable} from "gsap/Draggable"
gsap.registerPlugin(Draggable);


const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
        </main>
    )
}
export default App
