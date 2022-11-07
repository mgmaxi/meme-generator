import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import logo from '../../assets/memeImages/troll.png';
import './memeGenerator.css';
const MemeGenerator = () => {
	const [memeImage, setMemeImage] = useState(1);
	const [memeText, setMemeText] = useState('');

	const Download = () => {
		html2canvas(document.querySelector('#export')).then(function (canvas) {
			let img = canvas.toDataURL('memes/jpg');
			let link = document.createElement('a');
			link.download = 'meme.jpg';
			link.href = img;
			link.click();
		});
	};

	return (
		<>
			<div className="headerContainer">
				<img src={logo} alt="Logo" className="logo" />
				<h1>Generador de memes</h1>
			</div>
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
					<h2>Escribí el texto</h2>
					<input type="text" onChange={e => setMemeText(e.target.value)} />
					<button onClick={Download} type="button">
						DESCARGAR
					</button>
				</div>
				<figure id="export">
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
