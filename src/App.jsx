import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";
import LanguageModal from "./components/LanguageModal";
import "./App.css";

function App() {
    return (
        <LanguageProvider>
            <Navbar />
            <Welcome />
            <About />
            <Skills />
            <Education />
            <Project />
            <Achievement />
            <Footer />
            <LanguageModal />
        </LanguageProvider>
    );
}

export default App;
