import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardComponent from "./cardComponent"; // Import the card component
import CharacterDescription from '../views/characterDescription'; // Adjust the path as necessary


export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container mt-5">
            <div className="row">
                {store.characters.map((character, index) => (
                    <div key={index} className="col-md-4">
                        <CardComponent item={character} type="character" />
                    </div>
                ))}
            </div>

            <div className="row">
                {store.planets.map((planet, index) => (
                    <div key={index} className="col-md-4">
                        <CardComponent item={planet} type="planet" />
                    </div>
                ))}
            </div>

            <div className="row">
                {store.vehicles.map((vehicle, index) => (
                    <div key={index} className="col-md-4">
                        <CardComponent item={vehicle} type="vehicle" />
                    </div>
                ))}
            </div>
        </div>
    );
};
