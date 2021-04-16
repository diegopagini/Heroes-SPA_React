/** @format */

import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
	//history viene como prop gracias al ReactRouter

	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		// history.push('/');

		dispatch({
			type: types.login,
			payload: {
				name: 'Usuario',
			},
		});

		history.replace('/');
	};
	return (
		<div className='container mt-5'>
			<h1>Login</h1>
			<hr />

			<button className='btn btn-primary' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
