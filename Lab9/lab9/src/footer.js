import React from "react";
import langText from "./localization.js";

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<p className="centerText">{langText.footer.partnership}</p>
				<div className="centerText">
					<a href="https://www.speedrun.com/" target="_blank" rel="noopener noreferrer">
						<img className="navLogo" src={process.env.PUBLIC_URL + "/speedruncomLogo.png"} />
						<img className="navLogo" src={process.env.PUBLIC_URL + "/speedruncomText.png"} />
					</a>
				</div>
				<p className="rightText">
					{langText.footer.createdBy}<br />
					Yanic Mainville<br />
					300060226<br />
					ymain031@uOttawa.ca
				</p>
			</div>
		)
	}
}

export default Footer;