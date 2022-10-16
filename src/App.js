import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './composants/Navbar';
import Profil from './composants/Profil';
import fiverr from './assets/fiverr.svg';
import instagram from './assets/insta-logo.png';
import Musique from './composants/Musique';
import Contact from './composants/Contact';
import {mix} from './datas/mix.js';
import { useState } from "react";

function App() {

  const [musiqueActuelle, setMusiqueActuelle] = useState(null);
  const [activeCategorie, setActiveCategorie] = useState("Tout");
  const categories = mix.reduce(
    (acc, mix) =>
			acc.includes(mix.categorie) ? acc : acc.concat(mix.categorie),
		[]
  )

  useEffect(() => {
    if(musiqueActuelle != null){
      var audio = document.getElementById("audio");
      audio.src = musiqueActuelle.src
      audio.load()
    }
  }, [musiqueActuelle])


  return (
    <div className="bg-[#1E1E1E] h-full w-full">
      <header>
        <Navbar />
      </header>
      <Profil/>
      <div className='flex justify-end h-36 md:hidden mt-3'>
        <a href="https://fr.fiverr.com/nateraki" className='z-20 h-8 w-8 mr-3 rounded-full md:flex md:items-center md:bg-[#23395B] md:rounded-md md:mr-40 md:mt-5'>
          <img alt='logo_fiverr' className='rounded-full border-4 border-solid border-slate-300 border-opacity-20 md:border-0' src={fiverr}/>
        </a>
        <a href="https://www.instagram.com/nateraki/?hl=fr" className='z-20 h-8 w-8 mr-5 rounded-full md:flex md:items-center md:bg-[#23395B] md:rounded-md md:mr-40 md:mt-5'>
          <img alt='logo_instagram' className='rounded-full border-4 border-solid border-slate-300 border-opacity-20 md:border-0' src={instagram}/>
        </a>
      </div>
      <div className='hidden md:flex justify-end md:mt-10'>
        <a href="https://fr.fiverr.com/nateraki" className='flex items-center bg-[#23395B] hover:bg-[#182942] px-5 py-2 rounded-lg mr-32'>
          <img alt='logo_fiverr' className='w-8 h-8' src={fiverr}/>
          <span className='md:inline text-white font-extrabold ml-2'>Contact </span>
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
        <div>
          <ul className='flex justify-center items-center flex-wrap'>
            <li className="mr-3 ml-3 mt-5">
              <button onClick={() => (
                setActiveCategorie("Tout")
              )} className={`text-white bg-[#212E43] hover:bg-[#182942] p-5 rounded-lg font-bold ${activeCategorie === "Tout" && "bg-[#182942]"}`}>Tout</button>
            </li>
            {categories.map((categorie) => (
              <li key={categorie} className='mr-3 ml-3 mt-5'>
                <button onClick={() => {
                  setActiveCategorie(categorie)
                  console.log(categorie)
                }} className={`text-white bg-[#212E43] hover:bg-[#182942] p-5 rounded-lg font-bold ${activeCategorie === categorie && "bg-[#182942]"}`}>
                  {categorie}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full flex flex-col items-center justify-center flex-wrap md:flex-row mt-12'>
          {mix.filter((mix) => (activeCategorie === "Tout" || mix.categorie === activeCategorie )).map((mix) => (
            <Musique key={mix.id} id={mix.id} src={mix.src} title={mix.title} description={mix.description} musiqueActuelle={musiqueActuelle} setMusiqueActuelle={setMusiqueActuelle} />
          ))}
        </div>
      </div>

      <div id="contact" className='mx-9 md:mx-32'>
        <h2 className='text-xl md:text-3xl text-white font-bold separator-bottom relative pb-3 mb-5 md:mb-10'>Contact</h2>
        <div className='flex flex-col items-center mt-12'>
          <Contact/>
        </div>
      </div>

      {musiqueActuelle && (
                <audio id="audio" controls autoPlay className="w-9/12 mt-5 fixed bottom-0 right-0 left-0 ml-auto mr-auto mb-8">
                    <source src={musiqueActuelle.src} type="audio/mpeg"/>
                </audio>
            )}
      
    </div>
  );
}

export default App;
