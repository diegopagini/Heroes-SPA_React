/** @format */

import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const [formValues, handleInputChanges] = useForm({
		searchText: q,
	});

	const { searchText } = formValues;

	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
	// const heroesFiltered = getHeroesByName(searchText);

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
					{q === '' && (
						<div className='alert alert-info animate__animated animate__fadeIn'>
							Search a Hero
						</div>
					)}
					{q !== '' && heroesFiltered.length === 0 && (
						<div className='alert alert-danger animate__animated animate__fadeIn'>
							There is no hero with {q}
						</div>
					)}

					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
