import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 1000 });
  };

  return (
    <footer>
      <p onClick={scrollToTop} className="flex justify-center text-blue-500 hover:text-blue-700 hover:cursor-pointer text-lg">
        Top of the page
      </p>
    </footer>
  );
};

export default Footer;
