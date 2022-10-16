import React from "react";
import {useState , useEffect} from "react";
import ciel from '../assets/ciel.jpg';
import ciel_rouge from '../assets/ciel_rouge.jpg';

export default function Profil() {
    return(
        <div className="relative w-full mt-20 md:mt-0">
            <div className="h-32 md:h-52 overflow-hidden">
                <img src={ciel} alt="bannière ciel" />
            </div>
            <div className="absolute left-0 right-0 ml-auto mr-auto md:ml-32 md:right-3/4 top-2/4 md:top-3/4">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <img className="rounded-full w-28 h-28  md:w-40 md:h-40 border-2 md:border-4 border-white" src={ciel_rouge} alt="ciel_rouge" />
                    <div className="flex flex-col items-center md:items-start md:mt-14 md:ml-5">
                        <h2 className="font-bold text-3xl md:text-4xl text-white">Nateraki</h2>
                        <h3 className="text-slate-400 text-xl">Mix & Mastering</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}