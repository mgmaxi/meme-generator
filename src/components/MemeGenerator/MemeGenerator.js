import React, { useState } from 'react';
import './memeGenerator.css';
const MemeGenerator = () => {
	const [memeImage, setMemeImage] = useState(1);
	const [memeText, setMemeText] = useState('');

	const Download = () => {};

	return (
		<>
			<h1>Meme Generator</h1>
			<div className="memeGeneratorContainer">
				<div className="memeSettings">
					<h2>Elegí una imagen</h2>
					<select onChange={e => setMemeImage(e.target.value)}>
						<option value="1">Futurama</option>
						<option value="2">Robert Downey Jr.</option>
						<option value="3">Chica desastre</option>
						<option value="4">Alienígenas ancestrales</option>
						<option value="5">Piénsalo</option>
					</select>
					<h2>Escribí un texto para el meme</h2>
					<input type="text" onChange={e => setMemeText(e.target.value)} />
					<button onClick={Download} type="button">
						DESCARGAR
					</button>
				</div>
				<figure>
					<img
						src={require(`../../assets/memeImages/${memeImage}.png`)}
						alt="memeImage"
						className="memeImage"
					/>
					<figcaption className="memeText">{memeText}</figcaption>
				</figure>
			</div>
		</>
	);
};

export default MemeGenerator;