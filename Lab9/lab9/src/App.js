import React from 'react';
import NavBar from "./NavBar.js";
import Footer from "./footer.js";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./homePage.js";
import Learn from "./learnPage.js";
import Start from "./startPage.js";
import Ressources from "./ressourcesPage.js";
import Forum from "./forumPage.js";
import Help from "./helpPage.js";
import Error from "./errorPage.js";
import RerouteCode from "./rerouteCode.js";

class App extends React.Component {
  render() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<div className="content">
					<Route path="/home" component={Home} />
					<Route path="/learn" component={Learn} />
					<Route path="/start" component={Start} />
					<Route path="/ressources" component={Ressources} />
					<Route path="/forum" component={Forum} />
					<Route path="/help" component={Help} />
					<Route path="/error" component={Error} />
					<Route path="/" component={RerouteCode} />
				</div>
				<Footer />
			</div>
		</BrowserRouter>	
	);
  }
}

export default App;
