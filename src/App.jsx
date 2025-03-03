import { useState } from 'react'
import phrases from './data/phrases.json'
import { __Phrase__Component__ } from './util/index.js'
import __Phrase__Card__Component__ from './components/__Phrase__Card__Component__.jsx'
import __Button__Component__ from './components/__Button__Component__.jsx'
import { img1, img2, img3, img4 } from './assets'


{/* Arreglo de imagenes */}

const images = [img1, img2, img3, img4]

function App() {
	{ /* variables con el estado inicial y posterior */ }
	const [phrase, setPhrase] = useState(__Phrase__Component__(phrases))
	const [image, setImage] = useState(__Phrase__Component__(images))

	// aqui se cambia el estado del componente
	const changePhrases = () => {
		setPhrase(__Phrase__Component__(phrases))
		setImage(__Phrase__Component__(images))
	}

	return
		{/*Se carga por defecto un background en estado inicial*/}
		<div className="container" style={{ backgroundImage: `url('${image}')`}}>
			<h1>Fortune cookie</h1>
			
			{/* Lo que va a contener el cardComponent  */}
			<__Phrase__Card__Component__ 
				phrase = {phrase.phrase}
				author = {phrase.author}
			/>

			{/* Con funcion manejadora y parametro children dentro del componente */}
			<__Button__Component__ handlerPhrase={changePhrases}>
				Get a new phrase
			</__Button__Component__>

		</div>
}

export default App;

{
	/*CARLOS: Maquetar animaciones en el archivo index.css */
}
