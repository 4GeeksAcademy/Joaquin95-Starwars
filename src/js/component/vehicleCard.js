import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function vehicleCard() {
    const [vehicles, setVehicles] = useState([]);
    const { store, actions } = useContext(Context); 

    useEffect(() => {
        async function getVehicles() {
            let response = await fetch("https://www.swapi.tech/api/Vehicles");
            let data = await response.json();
            setVehicles(data.results);
            }

        getVehicles(); 
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
            {vehicles?.map((vehicle, index) => ( 
                <div key={index} className="card m-2" style={{"minWidth": "18rem"}}>
                    {/* You can uncomment this line and provide an image URL */}
                    {/* <img src={vehicle.imageUrl} className="card-img-top" alt={vehicle.name}> */}
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5> 
                        <p className="card-text">{vehicle.model || 'vehicles'}</p>
                        <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-primary">Learn more</Link>
                        <span 
                            onClick={(e) => handleFavorites(e, vehicle.name)} 
                            style={{ cursor: 'pointer', fontSize: '1.5rem', marginLeft: '10px' }}
                        >
                            {store.favs.includes(vehicle.name) ? '❤️' : '🤍'} 
                        </span>
                    </div>
                </div>
            ))}
        </div>
    ); 
}
