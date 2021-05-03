import React, { useState, createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [heroes, setHeroes] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [teamHeroes, setTeamHeroes] = useState([]);

	return (
		<AppContext.Provider
			value={{
				heroes,
				setHeroes,
				searchResults,
				setSearchResults,
				teamHeroes,
				setTeamHeroes,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
