import React from 'react';
import ButtonLogin from './ButtonLogin';
import FormLogin from './FormLogin';
import Logo from './Logo';
import Wallpaper from '../Wallpaper';

const Login = props => {
	return (
		<Wallpaper>
			<Logo />
			<FormLogin />
			<ButtonLogin />
		</Wallpaper>
	);
}

export default Login;