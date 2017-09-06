import * as express from 'express';

import { BaseController } from './../0.crosswalk/extends/base.controller';
import { Constants } from './../0.crosswalk/Constants';
import { DogModel } from './../6.models/dog.model';
import { DogBusiness } from './../3.business/dog.business';


export class DogController {

	constructor() {
	}

	query(req: express.Request, res: express.Response): void {
		try {
			new DogBusiness().query()
				.then((result: any) => res.send({ success: true, result }))
				.catch((error: any) => res.send({ success: false, error }));
		}
		catch (e) {
			console.log(e);
			res.send({ success: false, error: Constants.messages.error.BAD_REQUEST });
		}
	}
	findById(req: express.Request, res: express.Response): void {
		try {
			new DogBusiness().findById(req.params._id)
				.then((result: any) => res.json({ success: true, result }))
				.catch((error: any) => res.send({ success: false, error: Constants.messages.error.NOT_FOUND }));
		}
		catch (e) {
			console.log(e);
			res.send({ success: false, error: Constants.messages.error.BAD_REQUEST });
		}
	}

	create(req: express.Request, res: express.Response): void {
		try {
			let item = <DogModel>req.body;

			new DogBusiness().create(item)
				.then((result: any) => res.send({ success: true, result }))
				.catch((error: any) => res.send({ success: false, error }));
		}
		catch (e) {
			console.log(e);
			res.send({ success: false, error: Constants.messages.error.BAD_REQUEST });
		}
	}

	update(req: express.Request, res: express.Response): void {
		try {
			let item = <DogModel>req.body;

			new DogBusiness().update(req.params._id, item)
				.then((result: any) => res.send({ success: true, result }))
				.catch((error: any) => res.send({ success: false, error }));
		}
		catch (e) {
			console.log(e);
			res.send({ success: false, error: Constants.messages.error.BAD_REQUEST });
		}
	}

	remove(req: express.Request, res: express.Response): void {
		try {
			new DogBusiness().remove(req.params._id)
				.then((result: any) => res.send({ success: true }))
				.catch((error: any) => res.send({ success: false, error }));
		}
		catch (e) {
			console.log(e);
			res.send({ success: false, error: Constants.messages.error.BAD_REQUEST });
		}
	}
}

Object.seal(DogController);
