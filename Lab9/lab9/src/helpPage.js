import React from "react";
import langText from "./localization.js";

class Help extends React.Component {
	render() {
		return(
			<div className="container">
				<h1>{langText.help.faq.title}</h1>
				<h3>{langText.help.faq.languageQ}</h3>
				<p>{langText.help.faq.languageA}</p>
				<br />
				<h3>{langText.help.faq.whatGameQ}</h3>
				<p>{langText.help.faq.whatGameA}</p>
				<br />
				<h3>{langText.help.faq.startQ}</h3>
				<p>{langText.formatString(langText.help.faq.startA, <a href="https://www.speedrun.com/" target="_blank" rel="noopener noreferrer">speedrun.com</a>)}</p>
				<br />
				<h3>{langText.help.faq.captureCardQ}</h3>
				<p>{langText.help.faq.captureCardA}</p>
				<br />
				<h3>{langText.help.faq.glitchesQ}</h3>
				<p>{langText.help.faq.glitchesA}</p>
				<p>{langText.help.faq.glitchesA2}</p>
				<br />
				<h3>{langText.help.faq.specificQ}</h3>
				<p>{langText.formatString(langText.help.faq.specificA, <a href="https://www.speedrun.com/" target="_blank" rel="noopener noreferrer">speedrun.com</a>)}</p>
				<br />
				
				<h1>{langText.help.contactUs.title}</h1>
				<p>{langText.formatString(langText.help.contactUs.msg, langText.help.faq.title, <a href="https://www.speedrun.com/help" target="_blank" rel="noopener noreferrer">{langText.help.contactUs.helpSection}</a>)}</p>
			</div>
		)
	}
}

export default Help;