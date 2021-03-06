import React, { useState } from "react";
import "./HeroTeamCard.scss";
import * as Svg from "../../assets/images";
import { useAppContext } from "../../context/context";
import { Link } from "react-router-dom";

const HeroTeamCard = hero => {
	const { id } = hero;
	const {
		setTeamHeroes,
		setAlertMessage,
		handleOpenAlert,
	} = useAppContext();

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
		setAlertMessage("Deleted character");
		handleOpenAlert();
	};

	return (
		<div className="card__container">
			<img src={hero.image.url} alt="batman" className="card__image" />
			<Svg.Wave waveClass="wave-svg" color="#08060E" />
			<div className="content__container">
				<p className="hero-name__card">{hero.name}</p>
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
						onClick={() => deleteHero(id)}
						className="btn w-50 btn-outline">
						<Svg.Delete classNameIcon="btn-icon" color="#fffffe" />
					</button>
					<Link
						to={`/character/${id}`}
						className="btn btn-primary w-50 flex align-items-center">
						<Svg.Loupe classNameIcon="btn-icon m-auto" color="#fffffe" />
					</Link>
				</div>
			</div>
		</div>
	);
};

const Icon = ({ IconSvg }) => {
	return <IconSvg classNameIcon="powerstat-icon" color="#fff" />;
};

export default HeroTeamCard;
