/** @format */

import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { query = '' } = queryString.parse(location.search);

	const heroesFiltered = heroes;

	const [formValues, handleInputChanges] = useForm({
		searchText: query,
	});

	const { searchText } = formValues;

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
	};

	return (
		<div>
			<h1>SearchScreen</h1>
			<hr />
			<div className='row'>
				<div className='col-5'>
					<h4>Search Form</h4>
					<hr />
					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='Find your hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={handleInputChanges}
						/>
						<button
							type='submit'
							className='btn mt-1 btn-block btn-outline-primary w-100'
						>
							Search...
						</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
