import React, { useEffect, useState } from "react";
import "./Character.scss";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Link } from "react-router-dom";
import { LeftArrow } from "../../assets/images";

const Character = ({ match }) => {
	const { id } = match.params;
	const [characterData, setCharacterData] = useState({});
	const [isLoading, setIsloading] = useState(true);

	//`https://www.superheroapi.com/api.php/5448321371904802/${id}`

	const getData = async url => {
		const response = await axios.get(url);
		const data = await response.data;
		setCharacterData(data);
		setIsloading(false);
	};

	useEffect(() => {
		getData(`https://www.superheroapi.com/api.php/5448321371904802/${id}`);
	}, []);

	return (
		<div>
			<Container className="py-1">
				{isLoading ? (
					<h1>...is Loading</h1>
				) : (
					<>
						<Link
							className="btn-primary d-block w-fit mb-1 d-flex align-items-center "
							to="/">
							<div className="flex h-3rem">
								<LeftArrow color="#fff" classNameIcon="w-1rem mr-1" />
								<p className="m-0">Back home</p>
							</div>
						</Link>
						<Grid container spacing={3}>
							<Grid item lg={6}>
								<img src={characterData.image.url} alt="character image" />
							</Grid>
							<Grid item lg={6}>
								<p> {`Weight: ${characterData.appearance.weight[1]}`} </p>
								<p>{`Height: ${characterData.appearance.height[1]}`}</p>
								<p>
									{`Full name: ${
										characterData.biography["full-name"]
											? characterData.biography["full-name"]
											: "Unknown"
									}`}
								</p>
								<p>{`Alias: ${characterData.biography.aliases.join(
									", "
								)}`}</p>
								<p>{`Eye color: ${characterData.appearance["eye-color"]}`}</p>
								<p>{`Workplace: ${characterData.work.base}`}</p>
							</Grid>
						</Grid>
					</>
				)}
			</Container>
		</div>
	);
};

export default Character;
