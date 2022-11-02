import React from "react"
// import memesData from "../memesData.js"

export default function Meme() {

	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg'
	})

	const [allMemes, setAllMemes] = React.useState([])

	React.useEffect(() => {
		(async function() {
			const res = await fetch("https://api.imgflip.com/get_memes")
			const data = await res.json()
			setAllMemes(data.data.memes)
		})()

		// return () => {
		// 	// clean up functionn
		// }
    }, [])

	function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length)
		const url = allMemes[randomNumber].url
		setMeme(prevState => {
			return {
				...prevState, randomImage: url
			}
		})
	}

	return (
		<main>
			<div className="form">
			<input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={meme.bottomText}
                    onChange={handleChange}
                    name="bottomText"
                />
				<button
					className="form--button"
					onClick={getMemeImage}
				>
					Get a new meme image 🖼
				</button>
			</div>
			<div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
		</main>
	)
}