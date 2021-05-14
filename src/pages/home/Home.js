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

const Home = () => {
	const { searchResults, teamHeroes } = useAppContext();
	return (
		<div className="home__container">
			<Container>
				<h1 className="text-center">My Team</h1>
				<Grid container spacing={3}>
					{teamHeroes.map(heroe => (
						<Grid key={heroe.id} item lg={3}>
							<HeroTeamCard {...heroe} />
						</Grid>
					))}
					<Grid item lg={6}>
						{teamHeroes.length > 0 ? <TeamPowerStats /> : ""}
					</Grid>
				</Grid>
				<SearchBar />
				{searchResults ? (
					<Grid container spacing={3}>
						{searchResults.map(result => (
							<Grid key={result.id} item lg={3}>
								<HeroHomeCard {...result} />
							</Grid>
						))}
					</Grid>
				) : (
					<p>No se han encontraron resultados</p>
				)}
			</Container>
		</div>
	);
};

export default Home;
