import React from "react";
import "./HeroHomeCard.scss";
import * as Svg from "../../assets/images";
import { useAppContext } from "../../context/context";

const HeroHomeCard = hero => {
	const { teamHeroes, setTeamHeroes } = useAppContext();

	const addToTeam = id => {
		//filter to avoid extra additions
		if (teamHeroes.length < 6) {
			//filter to avoid duplicates
			if (!teamHeroes.find(heroToAdd => heroToAdd.id === id)) {
				setTeamHeroes(teamHeroes => [...teamHeroes, { ...hero }]);
			}
		}
	};

	return (
		<div className="card__container">
			<img src={hero.image.url} alt="batman" className="card__image" />
			<Svg.Wave waveClass="wave-svg" color="#08060E" />
			<div className="card__content-container">
				<p className="hero-name">{hero.name}</p>
				<button
					onClick={() => addToTeam(hero.id)}
					className="btn-primary text-bold btn-add-to-team">
					Add to team
				</button>
			</div>
		</div>
	);
};

export default HeroHomeCard;
