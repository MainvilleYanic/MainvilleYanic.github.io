import React from "react";
import langText from "./localization.js";

class Ressources extends React.Component {
	render() {
		return(
			<div className="container">
				<h1>{langText.nav.ressources}</h1>
				
				<h3>{langText.res.livesplit}</h3>
				<p>{langText.res.livesplitDesc}</p>
				<p>{langText.formatString(langText.res.download, <a href="https://livesplit.org/" target="_blank" rel="noopener noreferrer">https://livesplit.org/</a>)}</p>
				<br />
				
				<h3>{langText.res.obs}</h3>
				<p>{langText.res.obsDesc}</p>
				<p>{langText.formatString(langText.res.download, <a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer">https://obsproject.com/</a>)}</p>
				<br />
				
				<h3>{langText.res.emu}</h3>
				<p>{langText.res.emuDesc}</p>
				<p>{langText.res.emuDownload}</p>
			</div>
		)
	}
}

export default Ressources;