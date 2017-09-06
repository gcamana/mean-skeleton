export class Constants {

	static get DB_CONNECTION_STRING(): string {

		let isProd = process.env.NODE_ENV === 'production';
		let env = isProd ? 'production' : 'dev';

		let connections = {
			dev: 'mongodb://mixtura-dev:mixtura-dev@ds161210.mlab.com:61210/mixtura-dev',
			production: 'mongodb://mixtura-dev:mixtura-dev@ds161210.mlab.com:61210/mixtura-dev'
		};

		return connections[env];
	}

	static get messages() {
		return {
			error: {
				BAD_REQUEST: 'Error in your request.',
				NOT_FOUND: 'Item not found.',
				AUTHENTICATION_ERROR: 'Authentication error',
				ACCESS_DENIED: 'Access denied.',
				DUPLICATE_USERNAME: 'Username already exists.',
				INVALID_USERNAME: 'You must enter a valid username.',
				INCORRECT_USERNAME: 'Incorrect username.',
				INCORRECT_PASSWORD: 'Incorrect password.',
				NO_FILES_PROVIDED: 'No files provided.'
			},
			info: {}
		};
	}
}
