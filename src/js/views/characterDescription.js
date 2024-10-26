import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function CharacterDescription() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getCharacter() {
      let response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      let data = await response.json();
      setCharacter(data.result.properties);
    }
    getCharacter();
  }, [id]);

  return (
    <div className="text-center">
      <h1>Name</h1>
      <h6>{character.name}</h6>
      <h1>Birth year</h1>
      <h6>{character.birth_year}</h6>
      <h1>Gender</h1>
      <h6>{character.gender}</h6>
    </div>
  );
}
