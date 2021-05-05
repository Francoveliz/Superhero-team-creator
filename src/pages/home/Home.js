import React, { useState } from "react";
import {
	HeroTeamCard,
	HeroHomeCard,
	SearchBar,
	TeamPowerStats,
} from "../../components";
import "./Home.scss";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useAppContext } from "../../context/context";
import { Link } from "react-router-dom";

const Home = () => {
	const { searchResults, teamHeroes } = useAppContext();
	return (
		<div className="home__container">
			<Container>
				<Grid container spacing={3}>
					{teamHeroes.map(heroe => (
						<Grid item lg={3}>
							<HeroTeamCard {...heroe} />
						</Grid>
					))}
					<Grid item lg={6}>
						{teamHeroes.length > 0 ? <TeamPowerStats /> : ""}
					</Grid>
				</Grid>
				<Link to="/character/70 ">Test</Link>
				<SearchBar />
				{searchResults ? (
					<Grid container spacing={3}>
						{searchResults.map(result => (
							<Grid item lg={3}>
								<HeroHomeCard key={new Date()} {...result} />
							</Grid>
						))}
					</Grid>
				) : (
					<p>no se encontraron resultados</p>
				)}
			</Container>
		</div>
	);
};

export default Home;
