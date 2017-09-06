import * as mongoose from 'mongoose';

export interface UserModel extends mongoose.Document {
	username?: string;
	firstName?: string;
	lastName?: string;

	password?: string;

	salt?: string;
	hashedPwd?: string;

	createdOn?: Date;
	modifiedOn?: Date;

	validPassword?: any;
	getFullname?: any;
}
