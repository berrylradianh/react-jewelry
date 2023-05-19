import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineHome} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
      setNav(!nav)
    };
    
    return (
      <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a href="#main">
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                                <li className="mb-2">
                                    <button type="button"
                                        className="w-full text-black font-semibold border-2 border-pink-600 hover:border-pink-400  rounded-lg text-sm px-4 py-2 text-center">
                                        Sign In
                                    </button>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">WeddingBands</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Gifts</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rings
                                        by Style</a>
                                </li>
                            </ul>
                            <ul className=" text-sm text-gray-700 dark:text-gray-400 mt-1">
                                <li className="mb-2">
                                    <button type="button"
                                        className="w-full text-white font-semibold border-2 border-pink-600 bg-pink-600 hover:bg-pink-500  hover:border-pink-500 rounded-md text-sm px-4 py-2 text-center">
                                        Sign Up
                                    </button>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Engagement
                                        Rings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ON
                                        SALE</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rings
                                        by Material</a>
                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
            )
            : (
                ''
            )
        }
            <div class="hidden mt-3 ml-3 items-center md:flex">
                <img src="/public/assets/img/logo.png" alt="Logo" class="w-44 mr-3 h-auto" />
                <input type="text" id="search-navbar" className="block w-[68%] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-pink-400" placeholder="Search..." />
                <button type="button"
                    class="font-semibold text-gray-500 hover:bg-gray-100 rounded-full text-sm px-4 py-2 text-center">
                    Sign In
                </button>      
                <button type="button"
                    class="text-white font-semibold bg-pink-600  hover:bg-pink-500 rounded-full text-sm px-4 py-2 text-center">
                    Sign Up
                </button>        
            </div>
      </div>
    )
}

export default Navbar
