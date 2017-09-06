import { BaseBusiness } from './../0.crosswalk/extends/base.business';
import { DogModel } from './../6.models/dog.model';
import { DogRepository } from './../4.repositories/dog.repository';

export class DogBusiness extends BaseBusiness<DogModel> {

	constructor() {
		super(DogRepository);
	}
}

Object.seal(DogBusiness);
