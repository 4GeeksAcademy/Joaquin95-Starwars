import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function PlanetCard() {
    const [planets, setPlanets] = useState([]);
    const { store, actions } = useContext(Context); 

    useEffect(() => {
        async function getPlanets() {
            let response = await fetch("https://www.swapi.tech/api/planets/");
            let data = await response.json();
            setPlanets(data.results);
            console.log(data.results);
            }

        getPlanets(); 
    }, []); 

  
    const handleFavorites = (e, name) => {
        e.preventDefault();
        if (store.favs.includes(name)) {
            actions.removeFavs(name);
        } else {
            actions.addFavs(name);
        }
    };

    return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
            {planets?.map((planet, index) => ( 
                <div key={index} className="card m-2" style={{"minWidth": "18rem"}}>
                    {/* You can uncomment this line and provide an image URL */}
                    {/* <img src={planet.imageUrl} className="card-img-top" alt={planet.name}> */}
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5> 
                        <p className="card-text">{planet.terrain}</p>
                        <Link to={`/planet/${planet.uid}`} className="btn btn-primary">Learn more</Link>
                        <span 
                            onClick={(e) => handleFavorites(e, planet.name)} 
                            style={{ cursor: 'pointer', fontSize: '1.5rem', marginLeft: '10px' }}
                        >
                            {store.favs.includes(planet.name) ? '❤️' : '🤍'} 
                        </span>
                    </div>
                </div>
            ))}
        </div>
    ); 
}
