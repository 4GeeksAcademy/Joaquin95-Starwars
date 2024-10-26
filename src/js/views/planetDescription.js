import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function CharacterDescription() {
  const { id } = useParams();
  const [planets, setplanets] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getplanet() {
      let response = await fetch("https://www.swapi.tech/api/planets/");
      let data = await response.json();
      setplanet(data.result.properties);
    }
    getplanet();
  }, []);

  return (
    <div>
      <img src={planets.url}/>
      <h1>Name</h1>
      <h6>{planets.name}</h6>
      <h1>Birth year</h1>
      <h6>{planets.birth_year}</h6>
      <h1>population</h1>
      <h6>{planets.population}</h6>
    </div>
  );
}
