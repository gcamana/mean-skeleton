import { DogModel } from './../6.models/dog.model';
import { DataAccess } from '../DataAccess';
import { Crypto } from './../0.crosswalk/utils/Crypto';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class Schema {

	static get schema() {
		let schema = mongoose.Schema({
			name: { type: String, required: '{PATH} is required!'},
			color: { type: String, required: true },

			createdOn: { type: Date },
			modifiedOn: { type: Date, default: Date.now },
		});

		return schema;
	}
}

Object.seal(Schema);
export let DogSchema = mongooseConnection.model<DogModel>('Dog', Schema.schema);
