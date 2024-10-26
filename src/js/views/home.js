import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard";
import PlanetCard from "../component/planetCard";
import VehicleCard from "../component/vehicleCard";
// import CardComponent from "./cardComponent"; // Import the card component
// import CharacterDescription from "../views/characterDescription"; // Adjust the path as necessary

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <div className="container mt-5">
        <CharacterCard />
        <div className="row">
          {store.characters?.map((character, index) => (
            <div key={index} className="col-md-4">
              <CharacterCard item={character} type="character" />
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5">
        <PlanetCard />
        <div className="row">
          {store.characters?.map((planet, index) => (
            <div key={index} className="col-md-4">
              <PlanetCard item={planet} type="planet" />
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5">
        <VehicleCard />
        <div className="row">
          {store.characters?.map((vehicle, index) => (
            <div key={index} className="col-md-4">
              <VehicleCardCard item={vehicle} type="vehicle" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
