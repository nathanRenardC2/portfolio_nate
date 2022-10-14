import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './composants/Navbar';
import Profil from './composants/Profil';
import fiverr from './assets/fiverr.svg';
import Musique from './composants/Musique';
import maquette from './assets/musique/maquette.mp3';
import maquette2 from './assets/musique/maquette2.mp3';
import maquette3 from './assets/musique/maquette3.mp3';
import Contact from './composants/Contact';

function App() {
  return (
    <div className="bg-[#1E1E1E] h-full w-full">
      <header>
        <Navbar />
      </header>
      <Profil/>
      <div className='flex justify-end h-36 md:hidden'>
        <a href="https://fr.fiverr.com/" className='p-3 h-14 w-14 rounded-full md:flex md:items-center md:bg-[#23395B] md:rounded-md md:mr-40 md:mt-5'>
          <img className='rounded-full border-4 border-solid border-slate-300 border-opacity-20 md:border-0' src={fiverr}/>
        </a>
      </div>
      <div className='hidden md:flex justify-end md:mt-10'>
        <a href="https://fr.fiverr.com/" className='flex items-center bg-[#23395B] hover:bg-[#182942] px-5 py-2 rounded-lg mr-32'>
          <img className='w-8 h-8' src={fiverr}/>
          <span className='md:inline text-white font-extrabold ml-2'>Contact</span>
        </a>
      </div>
      <div id="propos" className='mx-9 mb-5 md:mb-20 md:mt-20'>
        <h2 className='text-xl text-white font-bold separator-bottom relative pb-3 mb-5'>A propos</h2>
        <p className='text-white text-opacity-70'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </div>

      <div id="projets" className='mx-9 mb-5 md:mb-20'>
        <h2 className='text-xl text-white font-bold separator-bottom relative pb-3 mb-5'>Projets</h2>
        <div className='flex flex-col items-center mt-12'>
          <Musique src={maquette} title="Mix1" description="mix1"/>
          <Musique src={maquette2} title="Mix2" description="mix2"/>
          <Musique src={maquette3} title="Mix3" description="mix3"/>
        </div>
      </div>

      <div id="contact" className='mx-9'>
        <h2 className='text-xl text-white font-bold separator-bottom relative pb-3 mb-5'>Contact</h2>
        <div className='flex flex-col items-center mt-12'>
          <Contact/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
