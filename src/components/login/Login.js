import React, { useState } from "react";
import "./Login.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useAppContext } from "../../context/context";
import { UserIcon, PasswordIcon } from "../../assets/images";
const https = require("https");
const Login = () => {
	const [emailInputText, setEmailInputText] = useState("");
	const [passwordInputText, setPasswordInputText] = useState("");
	const { setUserIsLogged } = useAppContext();

	const handleChangeEmailInput = e => {
		setEmailInputText(() => e.target.value);
	};

	const handleChangePasswordInput = e => {
		setPasswordInputText(() => e.target.value);
	};

	// At instance level
	const instance = axios.create({
		httpsAgent: new https.Agent({
			rejectUnauthorized: false,
		}),
	});

	instance.get("https://something.com/foo");

	// At request level
	const agent = new https.Agent({
		rejectUnauthorized: false,
	});

	// axios.get("https://something.com/foo", { httpsAgent: agent });

	const getToken = async () => {
		try {
			const response = await instance.post(
				"http://challenge-react.alkemy.org/",
				{
					email: emailInputText,
					password: passwordInputText,
				},
				{ httpsAgent: agent }
			);
			const token = response.data.token;
			return token;
		} catch (error) {
			return error;
		}
	};

	const handleOnSubmit = async e => {
		e.preventDefault();
		const token = await getToken();
		if (
			token ===
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"
		) {
			localStorage.setItem("token", token);
			setUserIsLogged(true);
		}
	};

	return (
		<Container>
			<Grid container>
				<Grid item lg={12}>
					<form onSubmit={handleOnSubmit} className="login-form">
						<div className="flex align-items-center input-container mb-1">
							<UserIcon color="#fff" classNameIcon="icon mr-1" />
							<input
								type="email"
								name="user"
								id="user"
								value={emailInputText}
								onChange={handleChangeEmailInput}
								placeholder="user@email.com"
							/>
						</div>

						<div className="flex align-items-center input-container mb-1">
							<PasswordIcon color="#fff" classNameIcon="icon mr-1" />
							<input
								type="password"
								name="password"
								id="password"
								value={passwordInputText}
								onChange={handleChangePasswordInput}
								placeholder="password"
							/>
						</div>

						<button className="btn-primary" type="submit">
							Login
						</button>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
