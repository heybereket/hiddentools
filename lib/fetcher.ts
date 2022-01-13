export const fetcher = async (url: string, init: Partial<RequestInit> = {}) => {
	return await fetch(`http://localhost:3000/api/${url}`, {
		mode: 'cors',
		...init,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			...init.headers,
		},
	}).then(res => res.json());
};