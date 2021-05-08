import React, {
	useState,
	createContext,
	useContext,
	useEffect,
} from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [heroes, setHeroes] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [teamHeroes, setTeamHeroes] = useState([]);
	const [userIsLogged, setUserIsLogged] = useState(false);

	return (
		<AppContext.Provider
			value={{
				heroes,
				setHeroes,
				searchResults,
				setSearchResults,
				teamHeroes,
				setTeamHeroes,
				userIsLogged,
				setUserIsLogged,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
