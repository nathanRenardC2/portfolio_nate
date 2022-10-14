import React from "react";
import { useState, useEffect } from "react";

export default function Contact() {
    return(
        <form className="w-full max-w-sm mb-10">
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Pseudonyme *" aria-label="Full name" required="required"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Nom" aria-label="Full name"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Prenom" aria-label="Full name"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Email *" aria-label="Full name" required="required"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 pb-20 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Message" aria-label="Full name"></input>
            </div>
            <div className="flex items-center justify-center">
                <button className="text-white font-bold flex text-xl bg-[#212E43] p-2 rounded-md">
                    Envoyer
                </button>
            </div>
        </form>
    )
}