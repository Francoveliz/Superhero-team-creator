import React, { useState } from "react";
import "./HeroHomeCard.scss";
import * as Svg from "../../assets/images";
import { useAppContext } from "../../context/context";

const HeroHomeCard = hero => {
	const {
		teamHeroes,
		setTeamHeroes,
		handleOpenAlert,
		setAlertMessage,
	} = useAppContext();

	const setAlert = message => {
		setAlertMessage(message);
		handleOpenAlert();
	};

	const isThisHeroIncluded = id =>
		teamHeroes.find(heroToAdd => heroToAdd.id === id);

	const isThisCharacterGood = hero => hero.biography.alignment === "good";

	const hasEnoughGoodCharacters = teamHeroes =>
		teamHeroes.filter(teamHero => teamHero.biography.alignment === "good")
			.length >= 3;

	const isThisCharacterBad = hero => hero.biography.alignment === "bad";

	const hasEnoughBadCharacters = teamHeroes =>
		teamHeroes.filter(teamHero => teamHero.biography.alignment === "bad")
			.length >= 3;

	const isTheTeamFull = teamHeroes => teamHeroes.length >= 6;

	const addToTeam = id => {
		if (isTheTeamFull(teamHeroes)) {
			setAlert("The team is full");
		} else if (isThisHeroIncluded(id)) {
			setAlert("The character is already in the team");
		} else if (
			isThisCharacterGood(hero) &&
			hasEnoughGoodCharacters(teamHeroes)
		) {
			setAlert("You alredy have three superheroes");
		} else if (
			isThisCharacterBad(hero) &&
			hasEnoughBadCharacters(teamHeroes)
		) {
			setAlert("You alredy have three villans");
		} else {
			setTeamHeroes(teamHeroes => [...teamHeroes, { ...hero }]);
			setAlert("Character added");
		}
	};

	return (
		<div className="card__container">
			<img src={hero.image.url} alt="batman" className="card__image" />
			<Svg.Wave waveClass="wave-svg" color="#08060E" />
			<div className="card__content-container">
				<p className="hero-name__card">{hero.name}</p>
				<button
					onClick={() => addToTeam(hero.id)}
					className="m-auto btn btn-primary text-bold btn-add-to-team">
					Add to team
				</button>
			</div>
		</div>
	);
};

export default HeroHomeCard;
