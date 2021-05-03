import React from "react";
import "./HeroTeamCard.scss";
import data from "../../assets/data/apiCallTest";
import * as Svg from "../../assets/images";

const powerstatsIcons = [
	Svg.IntelligenceIcon,
	Svg.StrengthIcon,
	Svg.SpeedIcon,
	Svg.DurabilityIcon,
	Svg.PowerIcon,
	Svg.CombatIcon,
];

const HeroTeamCard = () => {
	return (
		<div className="card__container">
			<img src={data.image.url} alt="batman" className="card__image" />
			<Svg.Wave waveClass="wave-svg" color="#08060E" />
			<div className="content__container">
				<p className="hero-name">Batman</p>
				<div className="icons__container">
					{powerstatsIcons.map(icon => (
						<div className="flex align-items-center">
							<div className="icon__container">
								<Icon IconSvg={icon} />
							</div>
							<p className="card__powerstat-value"> 99</p>
						</div>
					))}
				</div>
				<div className="flex gap-10px">
					<button className="btn-primary w-50 ">
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
