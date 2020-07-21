import React from "react";
import langText from "./localization.js";

class Home extends React.Component {
	render() {
		return(
			<div className="container">
				<h1>{langText.home.welcomeMessage}</h1>
				<p>{langText.home.siteDesc}</p>
				<p>{langText.formatString(langText.home.partnership, <a href="https://www.speedrun.com/" target="_blank" rel="noopener noreferrer">speedrun.com</a>)}</p>
				<br />
			
				<p>{langText.formatString(langText.home.what, <a href="./learn">{langText.nav.learn}</a>)}</p>
				<p>{langText.formatString(langText.home.start, <a href="./start">{langText.nav.start}</a>)}</p>
				<p>{langText.formatString(langText.home.question, <a href="./forum">{langText.nav.forum}</a>, <a href="./help">{langText.nav.help}</a>)}</p>
				<br />
				
				<p className="centerText">{langText.home.glhf}</p>
				
				<img className="center-text" src={process.env.PUBLIC_URL + "/logo.png"} />
			</div>
		)
	}
}

export default Home;