import { useState } from "react";
import { skills } from "./assets/text/skills";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Welcome />
            <div>
                <h1>YOKO</h1>
            </div>
        </>
    );
}

export default App;
