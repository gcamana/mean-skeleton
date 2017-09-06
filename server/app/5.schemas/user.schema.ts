import { DataAccess } from '../DataAccess';
import { Crypto } from './../0.crosswalk/utils/Crypto';
import { UserModel } from './../6.models/user.model';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class Schema {

	static get schema() {
		let schema = mongoose.Schema({
			username: { type: String, required: '{PATH} is required!', unique: true },
			firstName: { type: String, required: true },
			lastName: { type: String, required: true },

			createdOn: { type: Date },
			modifiedOn: { type: Date, default: Date.now },

			salt: { type: String },
			hashedPwd: { type: String }
		});

		schema.methods = {
			validPassword: function (passwordToMatch: any) {
				return Crypto.hashPwd(this.salt, passwordToMatch) === this.hashedPwd;
			},
			getFullname: function () {
				return `${this.firstName} ${this.lastName}`;
			}
		};

		return schema;
	}
}

Object.seal(Schema);
export let UserSchema = mongooseConnection.model<UserModel>('User', Schema.schema);
