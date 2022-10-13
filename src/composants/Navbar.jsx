import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [largeur , setLargeur] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        };

        if (largeur > 768) {
            setNavbarOpen(false);
        }

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        }

    }, []);

    function handleToggle() {
        setNavbarOpen(!navbarOpen);
        console.log(navbarOpen);
    }

    return(
        <nav class="bg-[#212E43] border-gray-200 px-2 sm:px-4 py-5">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="" class="flex items-center ml-4">
                    <span class="text-white self-center text-xl font-bold whitespace-nowrap">Nateraki</span>
                </a>
                <button onClick={handleToggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-4 mr-4 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                {navbarOpen ||largeur > 768 ? (
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="flex flex-col p-4 mt-4 rounded-lg text-white border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                            <li class="">
                                <a href="#" class="block py-2 pr-4 pl-3 md:bg-transparent md:hover:text-gray-400 md:p-0 dark:text-white" aria-current="page">A propos</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 md:hover:text-gray-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projets</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 md:hover:text-gray-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>) 
                    : null}
            </div>
        </nav>
        
    )
}