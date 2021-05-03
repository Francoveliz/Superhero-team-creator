import React from "react";
import "./HeroHomeCard.scss";
import data from "../../assets/data/apiCallTest";
import * as Svg from "../../assets/images";
import { useAppContext } from "../../context/context";

const HeroHomeCard = hero => {
	const { setTeamHeroes } = useAppContext();

	const addToTeam = () => {
		setTeamHeroes(teamHeroes => [...teamHeroes, { ...hero }]);
	};

	return (
		<div className="card__container">
			<img src={hero.image.url} alt="batman" className="image" />
			<Svg.Wave waveClass="wave-svg" color="#08060E" />
			<div className="card__content-container">
				<p className="hero-name">{hero.name}</p>
				<button onClick={addToTeam} className="btn-primary text-bold">
					Add to team
				</button>
			</div>
		</div>
	);
};

export default HeroHomeCard;
