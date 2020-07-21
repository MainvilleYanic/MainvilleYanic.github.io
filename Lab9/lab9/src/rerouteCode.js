import React from "react";
import {Redirect} from "react-router-dom";

class RerouteCode extends React.Component {
	render() {
		var address = (window.location.href);
		if ((new RegExp("^http(s)?:\\/\\/[a-zA-Z0-9:]*(\\/)?$")).test(address)){
			return(
				<Redirect to="/home" />
			)
		}
		
		var extention = (window.location.href).match(/[^\/]\/[^\/].*$/)[0];
		extention = extention.substring(1, extention.length);
		
		var goodLink = ["/home", "/learn", "/start", "/ressources", "/forum", "/help"];
		for (var i = 0; i < 6; i++ )
		{
			if (extention == goodLink[i])
			{
				return(
					<div></div>
				)
			}
		}
		return(
			<Redirect to="/error" />
		)
	}
}

export default RerouteCode;