import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/login" component={Login} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
