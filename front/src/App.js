import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import { useState } from 'react';
import Vision from './components/vision/vision';
import Team from './components/team/team';
import Builder from './components/builder/builder';
import Faq from './components/faq/faq';
import { Route, Routes, } from 'react-router-dom';
import NavMushie from './components/navbar/navbarTwo/navMushie';


function App() {
  const [colorFondo, setColorFondo] = useState("beige")
  return (
    <>
      <NavMushie colorFondo={colorFondo} />
      <Header setColorFondo={setColorFondo} colorFondo={colorFondo} />
      <Vision colorFondo={colorFondo} />
      <Team colorFondo={colorFondo} />
      <Builder colorFondo={colorFondo} />
      <Faq colorFondo={colorFondo}/>
    </>
  );
}

export default App;
