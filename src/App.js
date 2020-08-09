import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Stack from './components/Stack'
import Team from './components/Team'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Timeline />
      <Stack />
      <Team />
    </div>
  );
}

export default App;
