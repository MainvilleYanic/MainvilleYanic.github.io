import React from "react";
import langText from "./localization.js";

class Start extends React.Component {
	render() {
		return(
			<div className="container">
				<h1>{langText.start.how}</h1>
				<p>{langText.formatString(langText.start.intro.res, <a href="https://www.youtube.com/channel/UCmY2tPu6TZMqHHNPj2QPwUQ" target="_blank" rel="noopener noreferrer">{langText.person.snowman}</a>)}</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/Zxhd4tGuhf4" frameborder="0" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>
				<p className="quoteVid"><a href="https://www.youtube.com/channel/UCmY2tPu6TZMqHHNPj2QPwUQ" target="_blank" rel="noopener noreferrer">{langText.person.snowman}</a>, How To Start Speedrunning, <a href="https://www.youtube.com/watch?v=Zxhd4tGuhf4" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=Zxhd4tGuhf4</a></p>
				<br />
				
				<h3>{langText.start.game.title}</h3>
				<p>{langText.start.game.exp}</p>
				<p>{langText.start.game.exp2}</p>
				<p>{langText.formatString(langText.start.game.vid, <a href="https://www.youtube.com/channel/UCCpgm7tBTEqK41X4-YwNKmQ" target="_blank" rel="noopener noreferrer">{langText.person.flesh}</a>)}</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/AgQ_B4yehoo" frameborder="0" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>
				<p className="quoteVid"><a href="https://www.youtube.com/channel/UCCpgm7tBTEqK41X4-YwNKmQ" target="_blank" rel="noopener noreferrer">{langText.person.flesh}</a>, How to find the perfect speedrun for you, <a href="https://www.youtube.com/watch?v=AgQ_B4yehoo" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=AgQ_B4yehoo</a></p>
				<br />
				
				<h3>{langText.start.timer.title}</h3>
				<p>{langText.formatString(langText.start.timer.exp, <a href="./ressources">{langText.nav.ressources}</a>)}</p>
				<p>{langText.formatString(langText.start.timer.vid, <a href="https://www.youtube.com/channel/UC0VVYtw21rg2cokUystu2Dw" target="_blank" rel="noopener noreferrer">{langText.person.smallant}</a>)}</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/xq2MCodtH34" frameborder="0" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>
				<p className="quoteVid"><a href="https://www.youtube.com/channel/UC0VVYtw21rg2cokUystu2Dw" target="_blank" rel="noopener noreferrer">{langText.person.smallant}</a>, How to Set Up a Speedrun Timer (LiveSplit Tutorial), <a href="https://www.youtube.com/watch?v=xq2MCodtH34" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=xq2MCodtH34</a></p>
				<br />
				
				<h3>{langText.start.learn.title}</h3>
				<p>{langText.formatString(langText.start.learn.exp, <a href="https://www.speedrun.com/" target="_blank" rel="noopener noreferrer">speedrun.com</a>)}</p>
				<br />
			
				<h3>{langText.start.first.title}</h3>
				<p>{langText.start.first.exp}</p>
				<br />
				
				<h3>{langText.start.future.title}</h3>
				<p>{langText.start.future.exp}</p>
				<p>{langText.start.future.exp2}</p>
				<p>{langText.formatString(langText.start.future.exp3, <a href="./ressources">{langText.nav.ressources}</a>)}</p>
			</div>
		)
	}
}

export default Start;