import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function CharacterDescription() {
  const { id } = useParams();
  const [planet, setplanet] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getplanet() {
      let response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      let data = await response.json();
      setplanet(data.result.properties);
    }
    getplanet();
  }, [id]);

  return (
    <div >
      {/* <img src={planets.url}/> */}
    <h1>Name</h1>
    <h6>{planet.name}</h6>
    <h1>Terrain</h1>
    <h6>{planet.terrain}</h6>
    <h1>population</h1>
    <h6>{planet.population}</h6>
    </div>
  );
}


