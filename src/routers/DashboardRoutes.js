/** @format */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className='container mt-2'>
				<Switch>
					<Route exact path='/marvel' component={MarvelScreen} />
					<Route exact path='/hero/:heroeId' component={HeroScreen} />
					<Route exact path='/dc' component={DcScreen} />
					<Redirect to='/marvel' />
				</Switch>
			</div>
		</>
	);
};
