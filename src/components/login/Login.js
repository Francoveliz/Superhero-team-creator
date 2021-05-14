import React, { useState } from "react";
import "./Login.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useAppContext } from "../../context/context";
import { UserIcon, PasswordIcon } from "../../assets/images";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Login = () => {
	const [emailInputText, setEmailInputText] = useState("");
	const [passwordInputText, setPasswordInputText] = useState("");
	const { setUserIsLogged } = useAppContext();
	const [openAlert, setOpenAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const handleChangeEmailInput = e => {
		setEmailInputText(() => e.target.value);
	};

	const handleChangePasswordInput = e => {
		setPasswordInputText(() => e.target.value);
	};

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

	const getToken = async () => {
		try {
			const response = await axios.post(
				"http://challenge-react.alkemy.org/",
				{
					email: emailInputText,
					password: passwordInputText,
				}
			);
			const token = response.data.token;
			return token;
		} catch {
			setAlertMessage("Wrong username or password");
			handleOpenAlert();
		}
	};

	const handleOnSubmit = async e => {
		e.preventDefault();

		const token = await getToken();

		if (token === process.env.REACT_APP_LOGIN_TOKEN) {
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

						<button className=" btn btn-primary" type="submit">
							Login
						</button>
					</form>
				</Grid>
			</Grid>
			<Snackbar
				open={openAlert}
				autoHideDuration={6000}
				onClose={handleCloseAlert}>
				<Alert onClose={handleCloseAlert} severity="error">
					{alertMessage}
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default Login;
