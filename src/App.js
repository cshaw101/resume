import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.css';

const App = () => (
    <div className="App">
        <header>
            <h1>Caleb Shaw - Resume</h1>
        </header>
        <About />
        <Experience />
        <Skills />
        <Education />
    </div>
);

export default App;
