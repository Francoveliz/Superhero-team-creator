import { Home } from "./pages";
import "./assets/styles/globals.scss";
import { AppContextProvider } from "./context/context";

function App() {
	return (
		<AppContextProvider>
			<Home />
		</AppContextProvider>
	);
}

export default App;
