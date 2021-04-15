/** @format */

import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import './HeroesList.css';

export const HeroesList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	// const heroes = getHeroesByPublisher(publisher);
	return (
		<div className='cards-group animate__animated animate__fadeIn'>
			{heroes.map((hero) => {
				return <HeroCard key={hero.id} {...hero} />;
			})}
		</div>
	);
};
