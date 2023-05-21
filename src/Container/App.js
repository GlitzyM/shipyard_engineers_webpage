import React from "react";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import Image from "../Components/Image";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Problem from "../Components/Problem";
import Solution from "../Components/Solution";
import Services from "../Components/Services";
import Conatcs from "../Components/Conatcs";

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="flex flex-col">
        <Image />
        <About />
      </div>
      <Problem />
      <Solution />
      <Services />
      <Conatcs />
      <Footer />
    </div>
  );
};

export default App;
