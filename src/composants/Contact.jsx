import React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8t0xx9f', 'template_yapzzle', form.current, 'IlJZvFp2uheyz3FoS')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-sm mb-10">
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Pseudonyme *" name="user_pseudo"  aria-label="Full name" required="required"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Nom" aria-label="Full name" name="user_name"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Prenom" aria-label="Full surname" name="user_surname"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Email *" aria-label="Full email" name="user_email" required="required"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" type="text" placeholder="Email *" aria-label="Full email" name="user_email" required="required"></input>
            </div>
            <div className="flex items-center border-b border-slate-300 py-2 mb-5">
                <textarea className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none font-semibold" rows="8" type="text" placeholder="Message" aria-label="Full message" name="user_message"></textarea>
            </div>
            <div className="flex items-center justify-center">
                <button type="submit" className="w-full text-white text-center font-bold text-xl bg-[#23395B] hover:bg-[#182942] p-2 rounded-md">
                    Envoyer
                </button>
            </div>
        </form>
    )
}