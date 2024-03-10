import React, { useEffect, useState } from "react";

import { PiMoonFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [theme, setTheme] = useState("light");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0 && !scrollingDown) {
        setScrollingDown(true);
      } else if (scrollTop === 0 && scrollingDown) {
        setScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDown]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`block w-full transition-all duration-300 sticky top-0 z-10 ${
        scrollingDown ? "-translate-y-full absolute" : ""
      }  `}
    >
      {/* Big screen Nav */}
      <div
        className={`flex flex-wrap items-center justify-between px-9 md:py-4 bg-white/[.9] dark:bg-slate-900 backdrop-blur-sm transition-shadow duration-300 
         ${scrollingDown ? "dark:bg-slate-900/[0.8] shadow-lg" : ""}
        `}
      >
        <a href="#" onClick={() => setActiveNav("#")}>
          <div className="transition-all duration-500 motion-reduce:transition-none opacity-1 blur-0">
            <div>
              <div className="flex items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                <p>&lt;</p>
                <p className="text-5xl md:text-7xl" id="custom-logo">
                  Varun
                </p>
                <p>/&gt;</p>
              </div>
            </div>
          </div>
        </a>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 transition-all duration-500 xl:hidden motion-reduce:transition-none opacity-1 blur-0"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <div>
            {isNavOpen ? (
              <RxCross2 className="w-9 h-9 dark:fill-slate-300" />
            ) : (
              <RxHamburgerMenu className="w-9 h-9 dark:fill-slate-300" />
            )}
          </div>
        </button>

        <div
          className="items-center hidden w-full xl:block xl:w-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium xl:p-0 xl:flex-row xl:space-x-8 xl:mt-0">
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[50ms] translate-y-0 opacity-1">
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 router-link-active router-link-exact-active hover:text-[#4305ba]"
                onClick={() => setActiveNav("#about")}
              >
                About
              </a>
            </li>
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[100ms] translate-y-0 opacity-1">
              <a
                // aria-current="page"
                href="#skills"
                className="router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]"
                onClick={() => setActiveNav("#experience")}
              >
                Skills
              </a>
            </li>
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[150ms] translate-y-0 opacity-1">
              <a
                // aria-current="page"
                href="#work"
                className="router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]"
              >
                Work
              </a>
            </li>
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[200ms] translate-y-0 opacity-1">
              <a
                // aria-current="page"
                href="#contact"
                className="router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]"
              >
                Contact
              </a>
            </li>
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[250ms] translate-y-0 opacity-1">
              <a
                href="https://drive.google.com/file/d/1x2t12fgLOHEDk3TvCp0R2mJ_R5JOIrhn/view?usp=sharing"
                target="_blank"
              >
                <button className="block px-6 py-2 transition duration-300 ease-in-out bg-transparent border shadow-sm border-button-color shadow-button-color text-button-color hover:bg-button-color hover:text-white hover:dark:text-slate-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white">
                  Resume
                </button>
              </a>
            </li>
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[250ms] translate-y-0 opacity-1">
              <button className="block py-2 " onClick={handleThemeSwitch}>
                {theme === "light" ? (
                  <IoSunny className="h-7 w-7 text-slate-300 hover:text-[#4305ba]" />
                ) : (
                  <PiMoonFill className="h-7 w-7 text-slate-300 hover:text-[#4305ba]" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Big screen Nav */}

      {/* small screen Nav */}
      <div
        className={`block w-full absolute xl:hidden px-9 pb-4 bg-white/[.9] dark:bg-slate-900/[.9] backdrop-blur-sm ${
          isNavOpen ? "dropdown-enter-active" : " dropdown-enter-from"
        }`}
      >
        <ul>
          <li>
            <a
              href="#about"
              className="block py-5 router-link-active router-link-exact-active hover:text-[#4305ba]"
            >
              😎 About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block py-5 router-link-active router-link-exact-active hover:text-[#4305ba]"
            >
              🛡️ Experience
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="block py-5 router-link-active router-link-exact-active hover:text-[#4305ba]"
            >
              💻 Work
            </a>
          </li>
          <li>
            <a
              aria-current="page"
              href="#contact"
              className="block py-5 router-link-active router-link-exact-active hover:text-[#4305ba]"
            >
              📭 Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1x2t12fgLOHEDk3TvCp0R2mJ_R5JOIrhn/view?usp=sharing"
              target="_blank"
            >
              <button className="block w-full px-6 py-2 mt-5 text-center text-white shadow-sm bg-button-color shadow-button-color focus:bg-button-color focus:text-white active:bg-button-color active:text-white">
                Resume
              </button>
            </a>
          </li>
          <li>
            <div className="block w-full py-2 mt-5 text-center">
              <button className="block py-2" onClick={handleThemeSwitch}>
                {theme === "light" ? (
                  <IoSunny className="h-7 w-7 text-slate-300 hover:text-[#4305ba]" />
                ) : (
                  <PiMoonFill className="h-7 w-7 text-slate-400 hover:text-[#4305ba]" />
                )}
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/* Big screen Nav */}
    </nav>
  );
};

export default Navbar;
