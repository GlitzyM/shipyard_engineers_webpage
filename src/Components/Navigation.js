import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className=" mx-2 bg-gradient-to-b from-slate-100 to-slate-200">
      <ul className="flex flex-row basis-full list-none">
        <Link to="about" smooth={true} duration={500} className="flex basis-2/6 justify-center">
          <li className=" text-black text-lg hover:cursor-pointer">About Us</li>
        </Link>
        <Link to="problem" smooth={true} duration={600} className="flex basis-2/6 justify-center">
          <li className="flex justify-center text-black text-lg hover:cursor-pointer">Problems facing shipyards</li>
        </Link>
        <Link to="solution" smooth={true} duration={800} className="flex basis-2/6 justify-center">
          <li className="flex justify-center text-black text-lg hover:cursor-pointer">How are we solving the problem</li>
        </Link>
        <Link to="services" smooth={true} duration={1000} className="flex basis-2/6 justify-center">
          <li className="flex justify-center text-black text-lg hover:cursor-pointer">Services We Provide</li>
        </Link>
        <Link to="contacts" smooth={true} duration={1000} className="flex basis-2/6 justify-center">
          <li className="flex justify-center text-black text-lg hover:cursor-pointer">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
