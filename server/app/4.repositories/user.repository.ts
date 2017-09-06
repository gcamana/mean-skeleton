import * as mongoose from "mongoose";

import { BaseRepository } from './../0.crosswalk/extends/base.repository';
import { UserModel } from './../6.models/user.model';
import { UserSchema } from './../5.schemas/user.schema';

let User = mongoose.model('User');

export class UserRepository extends BaseRepository<UserModel> {
	constructor() {
		super(UserSchema);
	}
}

Object.seal(UserRepository);
