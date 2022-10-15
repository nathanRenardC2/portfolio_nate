import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './composants/Navbar';
import Profil from './composants/Profil';
import fiverr from './assets/fiverr.svg';
import instagram from './assets/insta-logo.png';
import Musique from './composants/Musique';
import maquette from './assets/musique/maquette.mp3';
import maquette2 from './assets/musique/maquette2.mp3';
import maquette3 from './assets/musique/maquette3.mp3';
import Contact from './composants/Contact';
import { useState } from "react";

function App() {

  const [musiqueActuelle, setMusiqueActuelle] = useState(null);

  return (
    <div className="bg-[#1E1E1E] h-full w-full">
      <header>
        <Navbar />
      </header>
      <Profil/>
      <div className='flex justify-end h-36 md:hidden mt-3'>
        <a href="https://fr.fiverr.com/" className='h-8 w-8 mr-3 rounded-full md:flex md:items-center md:bg-[#23395B] md:rounded-md md:mr-40 md:mt-5'>
          <img className='rounded-full border-4 border-solid border-slate-300 border-opacity-20 md:border-0' src={fiverr}/>
        </a>
        <a href="https://www.instagram.com/nateraki/?hl=fr" className='h-8 w-8 mr-5 rounded-full md:flex md:items-center md:bg-[#23395B] md:rounded-md md:mr-40 md:mt-5'>
          <img className='rounded-full border-4 border-solid border-slate-300 border-opacity-20 md:border-0' src={instagram}/>
        </a>
      </div>
      <div className='hidden md:flex justify-end md:mt-10'>
        <a href="https://fr.fiverr.com/" className='flex items-center bg-[#23395B] hover:bg-[#182942] px-5 py-2 rounded-lg mr-32'>
          <img className='w-8 h-8' src={fiverr}/>
          <span className='md:inline text-white font-extrabold ml-2'>Contact</span>
        </a>
      </div>
      <div id="propos" className='mx-9 md:mx-32 mb-5 md:mb-32 md:mt-20'>
        <h2 className='text-xl md:text-3xl text-white font-bold separator-bottom relative pb-3 mb-5 md:mb-10'>A propos</h2>
        <p className='text-white text-opacity-70'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </div>

      <div id="projets" className='mx-9 md:mx-32 mb-5 md:mb-32'>
        <h2 className='text-xl md:text-3xl text-white font-bold separator-bottom relative pb-3 mb-5 md:mb-20'>Projets</h2>
        <div className='flex flex-col md:flex-row items-center mt-12'>
          <Musique src={maquette} title="Mix1" description="mix1" musiqueActuelle={musiqueActuelle} setMusiqueActuelle={setMusiqueActuelle}/>
          <Musique src={maquette2} title="Mix2" description="mix2" musiqueActuelle={musiqueActuelle} setMusiqueActuelle={setMusiqueActuelle}/>
          <Musique src={maquette3} title="Mix3" description="mix3" musiqueActuelle={musiqueActuelle} setMusiqueActuelle={setMusiqueActuelle}/>
        </div>
      </div>

      <div id="contact" className='mx-9 md:mx-32'>
        <h2 className='text-xl md:text-3xl text-white font-bold separator-bottom relative pb-3 mb-5 md:mb-10'>Contact</h2>
        <div className='flex flex-col items-center mt-12'>
          <Contact/>
        </div>
      </div>

      {musiqueActuelle != null && (
                <audio id="audio" controls autoPlay className="w-9/12 mt-5 fixed bottom-0 right-0 left-0 ml-auto mr-auto mb-8">
                    <source src={musiqueActuelle} type="audio/mpeg" />
                </audio>
            )}
      
    </div>
  );
}

export default App;
