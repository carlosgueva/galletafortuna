import { useState } from 'react'
import phrases from './data/phrases.json'
import { randomItem } from './utils/index.js'
import PhraseCard from './components/PhraseCard.jsx'
import Button from './components/Button.jsx'
import { img1, img2, img3, img4 } from './assets'


{/* Arreglo de imagenes */}

const images = [img1, img2, img3, img4]

function App() {
	{ /* variables con el estado inicial y posterior */ }
	const [phrase, setPhrase] = useState(randomItem(phrases))
	const [image, setImage] = useState(randomItem(images))

	// aqui se cambia el estado del componente
	const changePhrases = () => {
		setPhrase(randomItem(phrases))
		setImage(randomItem(images))
	}

	return
		{/*Se carga por defecto un background en estado inicial*/}
		<div className="container" style={{ backgroundImage: `url('${image}')`}}>
			<h1>Fortune cookie</h1>
			
				{/* Lo que va a contener el cardComponent  */}
			<PhraseCard 
				phrase = {phrase.phrase}
				author = {phrase.author}
			/>

			{/* Con funcion manejadora y parametro children dentro del componente */}
			<Button handlerPhrase={changePhrases}>
				Get a new phrase
			</Button>

		</div>
}

export default App;

{
	/*CARLOS: Maquetar animaciones en el archivo index.css */
}
