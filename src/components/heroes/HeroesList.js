/** @format */

import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import './HeroesList.css';

export const HeroesList = ({ publisher }) => {
	const heroes = getHeroesByPublisher(publisher);
	return (
		<div className='cards-group'>
			{heroes.map((hero) => {
				return <HeroCard key={hero.id} {...hero} />;
			})}
		</div>
	);
};
