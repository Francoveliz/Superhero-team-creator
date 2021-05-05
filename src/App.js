import { Home, Character } from "./pages";
import { AppContextProvider } from "./context/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<AppContextProvider>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/character/:id" component={Character} />
				</Switch>
			</Router>
		</AppContextProvider>
	);
}

export default App;
