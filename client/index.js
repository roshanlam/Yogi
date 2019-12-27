import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/app';
import Welcome from './components/welcome';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
	<Provider store={ store }>
		<Router history={ hashHistory }>
			<Route path='/' component={ Welcome }></Route>
			<Route path='/8minuteYoga' component={ App }></Route>
		</Router>
	</Provider>, document.getElementById('app'))
);
