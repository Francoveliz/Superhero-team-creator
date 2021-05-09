import React, {
	useState,
	createContext,
	useContext,
	useEffect,
} from "react";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [heroes, setHeroes] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [teamHeroes, setTeamHeroes] = useState([]);
	const [userIsLogged, setUserIsLogged] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const Alert = props => {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	};

	const handleOpenAlert = () => {
		setOpenAlert(true);
	};

	const handleCloseAlert = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenAlert(() => false);
	};

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
				Alert,
				handleOpenAlert,
				handleCloseAlert,
				openAlert,
				setOpenAlert,
				alertMessage,
				setAlertMessage,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
