import got from 'got';

const BASE_URL = 'https://api.spacexdata.com/v5/launches';

const client = got.extend({
	prefixUrl: BASE_URL,
});

export const getLatestLaunch = async () => client.get('latest').json();
export const getPastLaunches = async () => client.get('past').json();

export const getNextLaunch = async () => client.get('next').json();
export const getNextLaunches = async () =>
	client
		.post('query', {
			json: {
				query: {
					date_utc: {
						$gte: new Date().toISOString(),
					},
				},
				options: {
					limit: 20,
					offset: 0,
				},
			},
		})
		.json();
