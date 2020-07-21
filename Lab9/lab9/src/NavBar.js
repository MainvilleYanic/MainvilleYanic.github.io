import React from "react";
import { Link } from "react-router-dom";
import langText from "./localization.js";

class NavBar extends React.Component {
	render() {
		return (
			<div className="navBar">
				<ul className="navLinks">
					<li><Link to="/home"><img className="navLogo" src={process.env.PUBLIC_URL + "/logo.png"} /></Link></li>
					<li><Link to="/learn">{langText.nav.learn}</Link></li>
					<li><Link to="/start">{langText.nav.start}</Link></li>
					<li><Link to="/ressources">{langText.nav.ressources}</Link></li>
					<li><Link to="/forum">{langText.nav.forum}</Link></li>
					<li><Link to="/help">{langText.nav.help}</Link></li>
				</ul>
			</div>
		)
	}
}

export default NavBar;