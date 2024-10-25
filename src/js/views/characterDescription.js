import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDescription() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        async function fetchCharacter() {
            const response = await fetch(`https://www.swapi.tech/api/people/?format=json`);
            const data = await response.json();
            setCharacter(data.result.properties); // Update based on the API response structure
        }
        fetchCharacter();
    }, [id]);

    return (
        <div className="container mt-5">
            {character ? (
                <>
                    <h1>{character.name}</h1>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Birth Year:</strong> {character.birth_year}</p>
                    <p><strong>Eye Color:</strong> {character.eye_color}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
