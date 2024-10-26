import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function CharacterDescription() {
  const { id } = useParams();
  const [vehicles, setvehicles] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function vehicle() {
      let response = await fetch("https://www.swapi.tech/api/Vehicles");
      let data = await response.json();
      setplanet(data.result.properties);
    }
    vehicle();
  }, []);

  return (
    <div>
      <img src={vehicles.url} />
      <h1>Name</h1>
      <h6>{vehicles.name}</h6>
      <h1>Modal</h1>
      <h6>{vehicles.modal}</h6>
      <h1>Speed</h1>
      <h6>{vehicles.speed}</h6>
    </div>
  );
}
