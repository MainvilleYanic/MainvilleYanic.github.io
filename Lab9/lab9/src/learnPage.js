import React from "react";
import langText from "./localization.js";

class Learn extends React.Component {
	render() {
		//Code for iframes given dirrectly by YouTube.
		
		return(
			<div className="container">
				<h1>{langText.learn.whatIs.title}</h1>
				<p>{langText.learn.whatIs.Bdef}</p>
				<p className="quote">-<a href="https://www.youtube.com/channel/UCQ9STd0zeHrrQGJQEuvhuTw" target="_blank" rel="noopener noreferrer">{langText.person.bismuth}</a></p>
				<p>{langText.learn.whatIs.Gdef}</p>
				<p className="quote">-<a href="https://www.speedrun.com/user/GreenPower713" target="_blank" rel="noopener noreferrer">{langText.person.gp713}</a></p>
				
				<p>{langText.formatString(langText.learn.whatIs.vid, <a href="https://www.youtube.com/channel/UCSCoziKHqjqbox3Fv3Pb4BA" target="_blank" rel="noopener noreferrer">{langText.person.score}</a>)}</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/-pagTcFc-Z4" frameborder="0" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>
				<p className="quoteVid"><a href="https://www.youtube.com/channel/UCSCoziKHqjqbox3Fv3Pb4BA" target="_blank" rel="noopener noreferrer">{langText.person.score}</a>, What is Speedrunning? A Look at Gaming's Fastest Players, <a href="https://www.youtube.com/watch?v=-pagTcFc-Z4" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=-pagTcFc-Z4</a></p>
				<br />
				
				<p>{langText.formatString(langText.learn.whatIs.mythVid, <a href="https://www.youtube.com/channel/UCQ9STd0zeHrrQGJQEuvhuTw" target="_blank" rel="noopener noreferrer">{langText.person.bismuth}</a>)}</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/wc2UJtzy8Lk" frameborder="0" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>
				<p className="quoteVid"><a href="https://www.youtube.com/channel/UCQ9STd0zeHrrQGJQEuvhuTw" target="_blank" rel="noopener noreferrer">{langText.person.bismuth}</a>, 10 Myths about Speedrunning, <a href="https://www.youtube.com/watch?v=wc2UJtzy8Lk" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=wc2UJtzy8Lk</a></p>
				<br />
				
				<h1>{langText.learn.why.title}</h1>
				<p>{langText.learn.why.reason}</p>
				<p>{langText.formatString(langText.learn.why.vid, <a href="https://www.youtube.com/channel/UCCpgm7tBTEqK41X4-YwNKmQ" target="_blank" rel="noopener noreferrer">{langText.person.flesh}</a>)}</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/VQISW8zaZk0" frameborder="0" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>
				<p className="quoteVid"><a href="https://www.youtube.com/channel/UCCpgm7tBTEqK41X4-YwNKmQ" target="_blank" rel="noopener noreferrer">{langText.person.flesh}</a>, Why speedrunning can be something for anyone, <a href="https://www.youtube.com/watch?v=VQISW8zaZk0" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=VQISW8zaZk0</a></p>
				<br />
				
				<h1>{langText.learn.how.title}</h1>
				<p>{langText.formatString(langText.learn.how.way, <a href="./start">{langText.nav.start}</a>)}</p>
			</div>
		)
	}
}

export default Learn;