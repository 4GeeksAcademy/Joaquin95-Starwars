import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext"; // Import the context

export default function CharacterDescription() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getCharacter() {
            try {
                let response = await fetch(`https://www.swapi.tech/api/people/?format=json`); // Replace with actual API
                let data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.log("Error fetching character:", error);
            }
        }

        getCharacter();
    }, [id]); // Add dependency array to avoid infinite re-renders

    return (
        <div>
            <img src={character.image} alt={character.name} />
            <h1>Name:</h1>
            <h6>{character.name}</h6>
            <h1>Love:</h1>
            <h6>{character.love}</h6>
            <h1>Profession:</h1>
            <h6>{character.profession}</h6>
        </div>
    );
}
