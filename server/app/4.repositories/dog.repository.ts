import * as mongoose from "mongoose";

import { BaseRepository } from './../0.crosswalk/extends/base.repository';
import { DogModel } from './../6.models/dog.model';
import { DogSchema } from './../5.schemas/dog.schema';

let User = mongoose.model('Dog');

export class DogRepository extends BaseRepository<DogModel> {
	constructor() {
		super(DogSchema);
	}
}

Object.seal(DogRepository);
