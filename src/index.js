import "./assets/styles/globals.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppContextProvider } from "./context/context";

ReactDOM.render(
	<React.StrictMode>
		<AppContextProvider>
			<CssBaseline />
			<App />
		</AppContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
