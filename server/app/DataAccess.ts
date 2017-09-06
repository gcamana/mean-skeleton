import * as mongoose from 'mongoose';

import { Constants } from './0.crosswalk/Constants';

export class DataAccess {

	static mongooseInstance: any;
	static mongooseConnection: mongoose.Connection;

	constructor() {
		DataAccess.connect();
	}

	static connect(): mongoose.Connection {
		if (this.mongooseInstance) return this.mongooseInstance;

		this.mongooseConnection = mongoose.connection;
		this.mongooseConnection.once("open", () => {
			console.log('\x1b[33m', '------------------------------------------------------');
			console.log('\x1b[33m', '              Connected to mongodb.');
			console.log('\x1b[33m', '------------------------------------------------------');
		});
		this.mongooseInstance = mongoose.connect(Constants.DB_CONNECTION_STRING);
		return this.mongooseInstance;
	}

}
DataAccess.connect();
