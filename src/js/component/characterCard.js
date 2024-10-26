import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function CharacterCard() {
  const [characters, setCharacters] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getCharacters() {
      let response = await fetch("https://www.swapi.tech/api/people/");
      let data = await response.json();
      setCharacters(data.results);
    }

    getCharacters();
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
      {characters?.map((character, index) => (
        <div key={index} className="card m-2" style={{ minWidth: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">{character.affiliation || "Characters"}</p>
            <Link
              to={`/character/${character.uid}`}
              className="btn btn-primary"
            >
              Learn more
            </Link>
            <span
              onClick={(e) => handleFavorites(e, character.name)}
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                marginLeft: "10px",
              }}
            >
              {store.favs.includes(character.name) ? "❤️" : "🤍"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
