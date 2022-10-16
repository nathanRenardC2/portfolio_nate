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
        <nav className="w-full bg-[#212E43] border-gray-200 px-2 sm:px-4 py-5 md:py-8 fixed top-0 z-50 md:relative">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <h1 href="" className="flex items-center ml-4">
                    <span className="text-white self-center text-xl font-bold whitespace-nowrap md:text-2xl">Nateraki</span>
                </h1>
                <button onClick={handleToggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-4 mr-4 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                {navbarOpen || largeur > 768 ? (
                    <div className="w-full md:block md:w-auto z-50" id="navbar-default">
                        <ul className="flex flex-col items-center mt-4 rounded-lg text-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li className="whitespace-nowrap hover:bg-[#1E1E1E] hover:md:bg-inherit w-full text-center">
                                <a href="#propos" className="block md:inline py-4 pr-4 pl-3 md:hover:text-gray-400 md:p-0 md:text-lg md:mr-10 md:font-bold" aria-current="page">A propos</a>
                            </li>
                            <li className="hover:bg-[#1E1E1E] hover:md:bg-inherit w-full text-center">
                                <a href="#projets" className="block md:inline py-4 pr-4 pl-3 md:hover:text-gray-400 md:p-0 md:text-lg md:mr-10 md:font-bold">Projets</a>
                            </li>
                            <li className="hover:bg-[#1E1E1E] hover:md:bg-inherit w-full text-center ">
                                <a href="#contact" className="block md:inline py-4 pr-4 pl-3 md:hover:text-gray-400 md:p-0 md:mr-10 md:text-lg md:font-bold">Contact</a>
                            </li>
                        </ul>
                    </div>) 
                    : null}
            </div>
        </nav>
        
    )
}