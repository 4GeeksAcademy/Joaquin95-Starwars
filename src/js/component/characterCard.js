import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function CharacterCard() {
    const [characters, setCharacters] = useState([]); // State to hold character data
    const { store, actions } = useContext(Context); // Using context to access state and actions

    useEffect(() => {
        async function getCharacters() {
            // Fetch characters from the SWAPI endpoint
            const response = await fetch("https://www.swapi.tech/api/people/?format=json");
            if (response.ok) {
                const data = await response.json(); // Parse the response to JSON
                setCharacters(data.results); // Set the characters state with results
            } else {
                console.error("Failed to fetch characters:", response.status, response.statusText);
                // You can handle the error here (e.g., set an error state)
            }
        }

        getCharacters(); // Call the function to fetch data
    }, []); // Run once on component mount

    // Function to handle adding/removing favorites
    const handleFavorites = (e, name) => {
        e.preventDefault();
        if (store.favs.includes(name)) {
            actions.removeFavs(name); // Remove favorite if already in the list
        } else {
            actions.addFav(name); // Add to favorites if not already present
        }
    };

    return (
        <div className="d-flex flex-wrap col-10 overflow-auto mt-5 mx-auto">
            {characters?.map((character, index) => ( // Loop through characters
                <div key={index} className="card m-2" style={{ width: "18rem" }}> {/* Add margin to cards */}
                    {/* You can uncomment this line and provide an image URL */}
                    {/* <img src={character.imageUrl} className="card-img-top" alt={character.name}> */}
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5> {/* Display character name */}
                        <p className="card-text">{character.affiliation || 'No affiliation available'}</p> {/* Display affiliation */}
                        <Link to={`/character/${index + 1}`} className="btn btn-primary">Learn more</Link> {/* Link to character details */}
                        <span 
                            onClick={(e) => handleFavorites(e, character.name)} 
                            style={{ cursor: 'pointer', fontSize: '1.5rem', marginLeft: '10px' }} // Styling the favorite icon
                        >
                            {store.favs.includes(character.name) ? '❤️' : '🤍'} {/* Toggle between filled and empty heart */}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
