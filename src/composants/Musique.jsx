import React from "react";
import { useState, useEffect } from "react";

export default function Musique({src, title, description}) {
    const [audioPlaying, setAudioPlaying] = useState(false);

    function playAudio() {
        setAudioPlaying(true);
    }

    function closeAudio(){
        setAudioPlaying(false);
    }

    return(
        <div className="bg-[#212E43] p-5 rounded-md w-4/5 mb-8">

            {audioPlaying ? (
                <div className="flex justify-end">
                    <button onClick={closeAudio}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ) : null}

            <div className="flex">
                <div className="flex items-center justify-center p-2 rounded-full bg-sky-500 w-12 h-12 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-white font-bold text-2xl">{title}</h3>
                    <h4 className="text-gray-400 font-semibold">{description}</h4>
                </div>
            </div>
            <div className="flex justify-end relative w-full mt-5">
                <button onClick={playAudio} className="text-white font-bold separator-top mt-3" href="">
                    Ecouter
                </button>
            </div>
            {audioPlaying && (
                <audio id="audio" controls autoPlay className="w-9/12 mt-5 fixed bottom-0 right-0 left-0 ml-auto mr-auto mb-8">
                    <source src={src} type="audio/mpeg" />
                </audio>
            )}
        </div>
    )
}
