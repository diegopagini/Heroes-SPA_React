/** @format */

import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { heroImages } from '../../helpers/heroImages';

export const HeroScreen = ({ history }) => {
	// Hook de reactRouter para conseguir los params
	const { heroeId } = useParams();

	const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

	if (!hero) {
		return <Redirect to='/' />;
	}

	const handleReturn = () => {
		if (history.lenght <= 2) {
			history.push('/');
		} else {
			history.goBack();
		}
	};

	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
	} = hero;

	return (
		<div className='row mt-5 animate__animated animate__fadeIn'>
			<div className='col-4'>
				<img
					// src={heroImages(`./${id}.jpg`)}
					src={heroImages(`./${heroeId}.jpg`).default}
					className='card-img'
					alt={superhero}
				/>
			</div>
			<div className='col-8'>
				<h3>{superhero}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter ego: </b> {alter_ego}
					</li>
					<li className='list-group-item'>
						<b>Publisher: </b> {publisher}
					</li>
					<li className='list-group-item'>
						<b>First Appearance: </b> {first_appearance}
					</li>
				</ul>
				<h5> Characters </h5>
				<p>{characters}</p>
				<button className='btn btn-outline-info' onClick={handleReturn}>
					Return
				</button>
			</div>
		</div>
	);
};
