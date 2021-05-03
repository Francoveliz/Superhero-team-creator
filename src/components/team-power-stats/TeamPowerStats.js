import React from "react";
import { useAppContext } from "../../context/context";
import HeroTeamCard from "../hero-team-card/HeroTeamCard";

const TeamPowerStats = () => {
	const { teamHeroes } = useAppContext();

	const powerstats = [
		"intelligence",
		"strength",
		"speed",
		"durability",
		"power",
		"combat",
	];

	const teamPowerstatsArray = teamHeroes.map(hero => hero.powerstats);

	const teamPowerstatsTotal = teamPowerstatsArray.reduce(
		(accumulator, hero) => {
			for (const powerstat in hero) {
				accumulator = {
					...accumulator,
					[powerstat]:
						(Math.abs(accumulator[powerstat]) || 0) +
						(Math.abs(hero[powerstat]) || 0),
				};
			}
			return accumulator;
		},
		{}
	);

	const teamHeight = teamHeroes.reduce((acumulator, hero) => {
		return (acumulator += parseInt(hero.appearance.height[1], 10));
	}, 0);

	const teamWeight = teamHeroes.reduce((acumulator, hero) => {
		return (acumulator += parseInt(hero.appearance.weight[1], 10));
	}, 0);

	const teamHighestPowerstat = () => {
		if (Object.keys(teamPowerstatsTotal).length > 0) {
			return Object.entries(teamPowerstatsTotal).reduce(
				(accumulator, powerstat) => {
					if (accumulator[1] < powerstat[1]) {
						return powerstat;
					}
					return accumulator;
				}
			);
		}
		return ["", ""];
	};

	return (
		<div className="team-power-stats__container">
			{<h3>{`Team category: ${teamHighestPowerstat()[0]}`}</h3>}
			{powerstats.map(powerstat => (
				<p>{`${powerstat} ${teamPowerstatsTotal[powerstat]}`}</p>
			))}
			{<p>{`Height ${teamHeight} cm.`}</p>}
			{<p>{`Weight ${teamWeight} Kg.`}</p>}
		</div>
	);
};

export default TeamPowerStats;
