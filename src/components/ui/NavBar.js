/** @format */

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import './navbar.css';

export const Navbar = () => {
	const {
		user: { name },
	} = useContext(AuthContext);

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<div className='navbar-brand'>HeroesApp</div>

			<div className='navbar-collapse'>
				<div className='navbar-nav w-100'>
					<div>
						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/marvel'
						>
							Marvel
						</NavLink>

						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/dc'
						>
							DC
						</NavLink>

						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/search'
						>
							Search
						</NavLink>
					</div>
					<div>
						<span className='nav-item nav-link text-info'>{name}</span>

						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/login'
						>
							Logout
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};
