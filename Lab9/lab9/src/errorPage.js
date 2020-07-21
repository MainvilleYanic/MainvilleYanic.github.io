import React from "react"
import langText from "./localization.js"

class Error extends React.Component {
	render() {
		return(
			<div className="container">
				<h1>{langText.error.pageNotFound}</h1>
				<p>{langText.error.errorMessage}</p>
				<p>{langText.formatString(langText.error.returnToSite, <a href="./home">{langText.here}</a>)}</p>
				<p>{langText.formatString(langText.error.helpPage, <a href="./help">{langText.nav.help}</a>)}</p>
				<br />
				<a href="./home">
					<img className="center-text" src={process.env.PUBLIC_URL + "/logo.png"} />
				</a>
				<br />
			</div>
		)
	}
}

export default Error;