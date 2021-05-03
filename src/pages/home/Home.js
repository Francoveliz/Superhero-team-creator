import React, { useState } from "react";
import { HeroTeamCard, HeroHomeCard, SearchBar } from "../../components";
import "./Home.scss";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Home = () => {
	const [searchResults, setSearchResults] = useState([]);
	return (
		<div className="home__container">
			<Container spacing={5}>
				<SearchBar setSearchResults={setSearchResults} />
				{searchResults ? (
					<Grid container>
						{searchResults.map(result => (
							<Grid item lg={3}>
								<HeroHomeCard
									key={new Date()}
									name={result.name}
									image={result.image.url}
								/>
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
