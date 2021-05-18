import React, { useState } from "react";
import { Loupe } from "../../assets/images";
import "./SearchBar.scss";
import axios from "axios";
import { useAppContext } from "../../context/context";

const SearchBar = () => {
	const { setSearchResults } = useAppContext();
	const [heroName, setHeroName] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.get(
				`https://www.superheroapi.com/api.php/${process.env.REACT_APP_SUPERHERO_API_TOKEN}/search/${heroName}`
			)
			.then(response => {
				setSearchResults(() => response.data.results);
			})
			.catch(error => console.error(error));
		setHeroName(() => "");
	};

	const handleOnChange = e => {
		setHeroName(() => e.target.value);
	};

	return (
		<div className="search-bar__container">
			<form
				onSubmit={handleSubmit}
				className="flex align-items-center w-100">
				<button className="search-bar__btn" type="submit">
					<Loupe classNameIcon="search-bar__icon" color="#fffffe" />
				</button>

				<input
					className="search-bar__input"
					type="text"
					value={heroName}
					onChange={handleOnChange}
					name="search-bar"
					id="search-bar"
				/>
			</form>
		</div>
	);
};

export default SearchBar;
