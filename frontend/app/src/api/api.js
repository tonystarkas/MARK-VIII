import axios from 'axios';
import resolve from './resolve';

export const login = async (test) => {
	return await resolve(
		axios.post('localhost:8080/login', { test }).then((res) => res.data)
	);
};
