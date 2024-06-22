import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"





export default function Header() {

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {

        setMobileOpen(!mobileOpen)

    }

    useEffect(() =>{
         
       
        
    },[])


    return (
        <>
            <div className="w-full bg-transparent border-b border-black ">
                <div className="container flex items-center justify-between py-4 max-w-6xl ">
                    <div className="inline-flex items-center space-x-2">
                        <Link to="/"><h1 className="font-extrabold text-4xl">MH<span className="font-bold text-green-700">.</span></h1></Link>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="inline-flex space-x-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  
                                     hover:text-orange-700 `

                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  
                                     hover:text-orange-700 `

                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/skill"
                                    className={({ isActive }) =>
                                        `block duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  
                                     hover:text-orange-700 `

                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/project"
                                    className={({ isActive }) =>
                                        `block duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  
                                     hover:text-orange-700 `

                                    }
                                >
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  
                                     hover:text-orange-700 `

                                    }
                                >
                                    contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  
                             hover:text-orange-700 `

                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden sm:block">
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Resume
                        </button>
                    </div>
                    <div className="block sm:hidden "  onClick={handleDrawerToggle}>
                        <button className="w-full h-full" onClick={handleDrawerToggle}>
                            {mobileOpen ? <IoMdClose /> :<AiOutlineMenu />    }
                        </button>
                        <div className={`${mobileOpen ? 'translate-x-full' :'translate-x-0'} w-full  bg-black/50 backdrop-blur-sm  fixed top-0 left-[-100%] bottom-0 min-h-screen duration-500`}>
                        <div className="w-[65%] bg-white h-full flex items-center justify-center  relative">
                             <div className="h-7 absolute right-5 top-5">
                                <button  onClick={handleDrawerToggle}>  {mobileOpen ? <IoMdClose /> :<AiOutlineMenu /> }</button>
                             </div>
                            <ul className=" flex flex-col space-y-3 justify-center items-center ">
                
                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={handleDrawerToggle}
                                        className={({ isActive }) =>
                                            `block duration-200 ${isActive ? "text-orange-700" : "text-black"}  
                                 hover:text-orange-700 `

                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        onClick={handleDrawerToggle}
                                        className={({ isActive }) =>
                                            `block duration-200 ${isActive ? "text-orange-700" : "text-black"}  
                                 hover:text-orange-700 `

                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/skill"
                                        onClick={handleDrawerToggle}
                                        className={({ isActive }) =>
                                            `block duration-200 ${isActive ? "text-orange-700" : "text-black"}  
                                 hover:text-orange-700 `

                                        }
                                    >
                                        Skills
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/project"
                                        onClick={handleDrawerToggle}
                                        className={({ isActive }) =>
                                            `block duration-200 ${isActive ? "text-orange-700" : "text-black"}  
                                 hover:text-orange-700 `

                                        }
                                    >
                                        Project
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        onClick={handleDrawerToggle}
                                        className={({ isActive }) =>
                                            `block duration-200 ${isActive ? "text-orange-700" : "text-black"}  
                                 hover:text-orange-700 `

                                        }
                                    >
                                        contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/github"
                                        onClick={handleDrawerToggle}
                                        className={({ isActive }) =>
                                            `block duration-200 ${isActive ? "text-orange-700" : "text-black"}  
                                 hover:text-orange-700 `

                                        }
                                    >
                                        Github
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
