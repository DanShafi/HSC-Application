import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Team from './components/Team'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Team />
    </div>
  );
}

export default App;
