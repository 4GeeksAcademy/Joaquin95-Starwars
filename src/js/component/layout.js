import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

import { Home } from "../views/home";
import { Single } from "../views/single";
import CharacterCard from "./characterCard";
// import PlanetDescription from "./views/planetDescription"; // Similar setup for planets
// import VehicleDescription from "./views/vehicleDescription";
import CharacterDescription from "../views/characterDescription"; // Make sure to import the CharacterDescription component
import injectContext from "../store/appContext";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterDescription />} />
            <Route path="/character/:id" element={<CharacterCard />} />
            {/* <Route path="/planet/:id" element={<PlanetDescription />} /> Route for planet */}
            {/* <Route path="/vehicle/:id" element={<VehicleDescription />} /> Route for vehicle */}
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
