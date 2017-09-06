import * as mongoose from 'mongoose';

export interface DogModel extends mongoose.Document {
	name?: string;
	color?: string;

	createdOn?: Date;
	modifiedOn?: Date;
}
