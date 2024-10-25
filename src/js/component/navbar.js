import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars API</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favs.length}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favs.length > 0 ? (
							store.favs.map((fav, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
									{fav}
									<button className="btn btn-danger btn-sm" onClick={() => actions.removeFavs(fav)}>X</button>
								</li>
							))
						) : (
							<li className="dropdown-item">No favorites added</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
