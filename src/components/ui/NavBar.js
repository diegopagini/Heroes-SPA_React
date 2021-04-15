/** @format */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				HOME
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav w-100'>
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
		</nav>
	);
};
