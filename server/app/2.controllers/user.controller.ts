import * as express from 'express';

import { BaseController } from './../0.crosswalk/extends/base.controller';
import { Constants } from './../0.crosswalk/Constants';
import { UserModel } from './../6.models/user.model';
import { UserBusiness } from './../3.business/user.business';


export class UserController {

	constructor() {
	}

	query(req: express.Request, res: express.Response): void {
		try {
			new UserBusiness().query()
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
			new UserBusiness().findById(req.params._id)
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
			let user = <UserModel>req.body;

			new UserBusiness().create(user)
				.then(result => res.send({ success: true, result }))
				.catch(error => {
					if (error.toString().indexOf('E11000') > -1) {
						error = Constants.messages.error.DUPLICATE_USERNAME;
					}
					res.send({ success: false, error })
				});
		}
		catch (e) {
			console.log(e);
			res.send({ success: false, error: Constants.messages.error.BAD_REQUEST });
		}
	}

	update(req: express.Request, res: express.Response): void {
		try {
			let item = <UserModel>req.body;

			new UserBusiness().update(req.params._id, item)
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
			new UserBusiness().remove(req.params._id)
				.then((result: any) => res.send({ success: true }))
				.catch((error: any) => res.send({ success: false, error }));
		}
		catch (e) {
			console.log(e);
			res.send({ success: false, error: Constants.messages.error.BAD_REQUEST });
		}
	}
}

Object.seal(UserController);
