import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Hire from './components/Hire'
import Team from './components/Team'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Hire />
      <Team />
    </div>
  );
}

export default App;
