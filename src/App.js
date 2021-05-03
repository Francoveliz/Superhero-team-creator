import { Home } from "./pages";
import { AppContextProvider } from "./context/context";

function App() {
	return (
		<AppContextProvider>
			<Home />
		</AppContextProvider>
	);
}

export default App;
