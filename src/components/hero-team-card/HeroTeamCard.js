import React from "react";
import "./HeroTeamCard.scss";
import * as Svg from "../../assets/images";
import { useAppContext } from "../../context/context";

const HeroTeamCard = hero => {
	const { teamHeroes, setTeamHeroes } = useAppContext();
	const {
		intelligence,
		combat,
		durability,
		power,
		speed,
		strength,
	} = hero.powerstats;

	const powerstats = [
		{
			icon: Svg.IntelligenceIcon,
			value: intelligence,
		},
		{
			icon: Svg.StrengthIcon,
			value: strength,
		},
		{
			icon: Svg.SpeedIcon,
			value: speed,
		},
		{
			icon: Svg.DurabilityIcon,
			value: durability,
		},
		{
			icon: Svg.PowerIcon,
			value: power,
		},
		{
			icon: Svg.CombatIcon,
			value: combat,
		},
	];

	const deleteHero = id => {
		setTeamHeroes(heroes => heroes.filter(hero => !(hero.id === id)));
	};

	return (
		<div className="card__container">
			<img src={hero.image.url} alt="batman" className="card__image" />
			<Svg.Wave waveClass="wave-svg" color="#08060E" />
			<div className="content__container">
				<p className="hero-name">{hero.name}</p>
				<div className="icons__container">
					{powerstats.map(powerstat => (
						<div className="flex align-items-center">
							<div className="icon__container">
								<Icon IconSvg={powerstat.icon} />
							</div>
							<p className="card__powerstat-value">
								{powerstat.value === "null" ? "?" : powerstat.value}
							</p>
						</div>
					))}
				</div>
				<div className="flex gap-10px">
					<button
						onClick={() => deleteHero(hero.id)}
						className="btn-primary w-50 ">
						<Svg.Delete classNameIcon="btn-icon" color="#fffffe" />
					</button>
					<button className="btn-primary w-50 ">
						<Svg.Loupe classNameIcon="btn-icon" color="#fffffe" />
					</button>
				</div>
			</div>
		</div>
	);
};

const Icon = ({ IconSvg }) => {
	return <IconSvg classNameIcon="powerstat-icon" color="#fff" />;
};

export default HeroTeamCard;
