import React from 'react';
import './App.css';
import ControlPanel from './Pages/ControlPanel';
import Details from './Pages/Details';
import NavBar from './components/nav/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import './assets/css/fonts.css';

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<ControlPanel />
					</Route>

					<Route exact path="/user/:uid">
						<Details />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
