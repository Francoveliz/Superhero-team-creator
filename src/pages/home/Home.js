import React, { useState } from "react";
import { HeroTeamCard, HeroHomeCard, SearchBar } from "../../components";
import "./Home.scss";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useAppContext } from "../../context/context";

const Home = () => {
	const { searchResults, teamHeroes } = useAppContext();
	return (
		<div className="home__container">
			<Container>
				<Grid container spacing={3}>
					{teamHeroes.map(heroe => (
						<Grid item lg={4}>
							<HeroTeamCard {...heroe} />
						</Grid>
					))}
				</Grid>
				<SearchBar />
				{searchResults ? (
					<Grid container spacing={2}>
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
