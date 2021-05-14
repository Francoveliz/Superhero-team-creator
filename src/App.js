import { useEffect } from "react";
import { Home, Character } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components";
import { useAppContext } from "./context/context";
import Snackbar from "@material-ui/core/Snackbar";

function App() {
	const {
		userIsLogged,
		setUserIsLogged,
		openAlert,
		handleCloseAlert,
		alertMessage,
		Alert,
	} = useAppContext();
	const tokenLocalStorage = localStorage.getItem("token");
	useEffect(() => {
		if (tokenLocalStorage === process.env.REACT_APP_LOGIN_TOKEN) {
			setUserIsLogged(true);
		}
	}, []);

	return (
		<>
			{userIsLogged ? (
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/character/:id" component={Character} />
					</Switch>
					<Snackbar
						open={openAlert}
						autoHideDuration={6000}
						onClose={handleCloseAlert}>
						<Alert onClose={handleCloseAlert} severity="error">
							{alertMessage}
						</Alert>
					</Snackbar>
				</Router>
			) : (
				<Login />
			)}
		</>
	);
}

export default App;
