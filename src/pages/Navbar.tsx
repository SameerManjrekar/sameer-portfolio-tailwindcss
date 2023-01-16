import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("light");

  // If local storage is empty save the theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  // select html element
  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setMode("dark");
    } else {
      html?.classList.remove("dark");
      setMode("light");
    }
  }, [mode]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div
      className={`section flex md:flex items-center justify-between mx-auto`}
    >
      <nav>
        <h1>
          <span className="bg-gradient-to-r from-red-300 to-blue-500 rounded-md p-0.5 text-3xl md:text-4xl font-medium flex">
            <a href="#" className="cursor-pointer dark:text-white">
              Sameer Manjrekar
            </a>
          </span>
        </h1>
      </nav>
      <div className="hidden md:flex cursor-pointer text-[1.1rem]">
        <ul className="flex items-center gap-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li onClick={handleThemeSwitch}>
            {mode === "light" ? (
              <BsFillMoonStarsFill className="w-4 h-4" />
            ) : (
              <MdLightMode className="w-4 h-4" />
            )}
          </li>
        </ul>
      </div>
      <HiMenuAlt3
        className="cursor-pointer md:hidden text-3xl dark:text-white"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className="fixed right-0 top-0 bg-blue-400 h-screen text-white w-80 z-50"
        >
          <div className="flex mt-[40%] ml-[30%] flex-col gap-8 text-xl">
            <li>
              <a onClick={() => setToggle(!toggle)} href="#about">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(!toggle)} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(!toggle)} href="#services">
                Services
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(!toggle)} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(!toggle)} href="#contact">
                Contact
              </a>
            </li>
            <li onClick={handleThemeSwitch}>
              {mode === "light" ? (
                <BsFillMoonStarsFill
                  className="w-4 h-4"
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <MdLightMode
                  className="w-4 h-4"
                  onClick={() => setToggle(!toggle)}
                />
              )}
            </li>
          </div>
          <HiX
            className="absolute cursor-pointer top-6 right-8 text-3xl"
            onClick={() => setToggle(!toggle)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
