import Image from "next/image";
import { assets } from "../../../assets/assets";
import { useEffect, useRef, useState } from "react";

function Navbar({isDarkMode, setIsDarkMode}) {

  const [isScroll, setIsScroll] = useState(false)

  const sideMenuRef = useRef();
  function closeMenu() {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }
  function openMenu() {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 40) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full"/>
      </div>
      <nav className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-28 cursor-pointer mr-14 "></Image>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : ' bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'}`}>
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">Services </a></li>
          <li><a className="font-Ovo" href="#work">My Work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6"/>
          </button>

          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 ">Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" /></a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6"/>
          </button>
        </div>

        {/* mobile menu */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-1000 dark:bg-darkHover dark:text-white">
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer"/>
          </div>
          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services </a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar;






// ================================================


// import Image from "next/image";
// import { assets } from "../../../assets/assets";
// import { useState } from "react";

// function Navbar() {

//   const [menu, setMenu] = useState(false)
//   function function1() {
//     setMenu(!menu)
//   }

//   return (
//     <>
//       <div className="border-2 border-red-500 fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
//         <Image src={assets.header_bg_color} alt="" className="w-full"/>
//       </div>
//       <nav className="border-2 border-black w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
//         <a href="#top">
//           <Image src={assets.logo} alt="" className="border-2 border-red-500 w-28 cursor-pointer mr-14 "></Image>
//         </a>
//         <ul className="border-2 border-green-500 hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white bg-opacity-50 shadow-sm">
//           <li><a className="font-Ovo" href="#top">Home</a></li>
//           <li><a className="font-Ovo" href="#about">About me</a></li>
//           <li><a className="font-Ovo" href="#services">Services </a></li>
//           <li><a className="font-Ovo" href="#work">My Work</a></li>
//           <li><a className="font-Ovo" href="#contact">Contact me</a></li>
//         </ul>
//         <div className="border-2 border-black flex items-center gap-4">
//           <button>
//             <Image src={assets.moon_icon} alt="" className="w-6"/>
//           </button>
//           <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">Contact <Image src={assets.arrow_icon} alt="" className="w-3" /></a>
//           <button className="block md:hidden ml-3" onClick={function1}>
//             <Image src={assets.menu_black} alt="" className="w-6"/>
//           </button>
//         </div>

//         {/* mobile menu */}

//         <ul className={`${menu ? 'right-0 border-2 border-green-500 flex md:hidden flex-col gap-4 py-20 px-10 fixed  top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-1000':'-right-64 border-2 border-green-500 flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-1000' }`}>
//           <div className="absolute top-6 right-6" onClick={function1}>
//             <Image src={assets.close_black} alt="" className="w-5 cursor-pointer"/>
//           </div>
//           <li><a className="font-Ovo" onClick={function1} href="#top">Home</a></li>
//           <li><a className="font-Ovo" onClick={function1} href="#about">About me</a></li>
//           <li><a className="font-Ovo" onClick={function1} href="#services">Services </a></li>
//           <li><a className="font-Ovo" onClick={function1} href="#work">My Work</a></li>
//           <li><a className="font-Ovo" onClick={function1} href="#contact">Contact me</a></li>
//         </ul>
//       </nav>
//     </>
//   )
// }
// export default Navbar;
