import React from "react";
import "./HeroHomeCard.scss";
import data from "../../assets/data/apiCallTest";
import * as Svg from "../../assets/images";

const HeroHomeCard = ({ name, image }) => {
	return (
		<div className="card__container">
			<img src={image} alt="batman" className="image" />
			<Svg.Wave waveClass="wave-svg" color="#08060E" />
			<div className="card__content-container">
				<p className="hero-name">{name}</p>
				<button className="btn-primary text-bold">Add to team</button>
			</div>
		</div>
	);
};

export default HeroHomeCard;
