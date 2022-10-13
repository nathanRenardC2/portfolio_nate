import React from "react";
import {useState , useEffect} from "react";
import ciel from '../assets/ciel.jpg';
import ciel_rouge from '../assets/ciel_rouge.jpg';

export default function Profil() {
    return(
        <div className="relative w-full">
            <div className="h-32 md:h-52 overflow-hidden">
                <img src={ciel} alt="bannière ciel" />
            </div>
            <div className="absolute right-2/4 top-2/4">
                <div className="flex flex-col items-center justify-center">
                    <img className="rounded-full w-28 h-28 border-4 border-white" src={ciel_rouge} alt="ciel_rouge" />
                    <h2 className="font-bold text-3xl text-white">Nateraki</h2>
                    <h3 className="text-slate-400 text-xl">Mix & Mastering</h3>
                </div>
            </div>
        </div>
    )
}