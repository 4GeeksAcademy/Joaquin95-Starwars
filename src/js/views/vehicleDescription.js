import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function CharacterDescription() {
  const { id } = useParams();
  const [vehicle, setvehicle] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getvehicle() {
      let response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
      let data = await response.json();
      setvehicle(data.result.properties);
    }
    getvehicle();
  }, [id]);

  return (
    <div>
      {/* <img src={vehicle.url} /> */}
      <h1>Name</h1>
      <h6>{vehicle.name}</h6>
      <h1>Model</h1>
      <h6>{vehicle.model}</h6>
      <h1>Speed</h1>
      <h6>{vehicle.max_atmosphering_speed}</h6>
    </div>
  );
}
