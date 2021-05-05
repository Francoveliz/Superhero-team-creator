import React, { useEffect, useState } from "react";
import "./Character.scss";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axios from "axios";

const Character = ({ match }) => {
	const id = match.params.id;
	const [characterData, setCharacterData] = useState({});

	const jorge = () => {
		axios
			.get(`https://superheroapi.com/api/5448321371904802/${id}`)
			.then(response => console.log(response.data))
			.catch(error => console.error(error));
	};

	return (
		<div>
			<Container>
				<Grid container>
					<Grid item lg={6}>
						<button onClick={jorge}> prueba{id}</button>
						{/* <img src={characterData.image.url} alt="character image" /> */}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Character;
