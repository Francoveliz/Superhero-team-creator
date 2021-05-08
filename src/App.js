import { useEffect } from "react";
import { Home, Character } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components";
import { useAppContext } from "./context/context";

function App() {
	const { userIsLogged, setUserIsLogged } = useAppContext();
	console.log(userIsLogged);
	const tokenLocalStorage = localStorage.getItem("token");
	useEffect(() => {
		if (
			tokenLocalStorage ===
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"
		) {
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
				</Router>
			) : (
				<Login />
			)}
		</>
	);
}

export default App;
