
import * as express from 'express';

import { Constants } from './../../0.crosswalk/Constants';

export class BaseController<T> {
	private _docBusiness;

	constructor(baseBusiness: any) {
		this._docBusiness = new baseBusiness();
	}

	query(req: express.Request, res: express.Response): void {
		try {
			this._docBusiness.query()
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
			this._docBusiness.findById(req.params._id)
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
			let item = <T>req.body;

			this._docBusiness.create(item)
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
			let item = <T>req.body;

			this._docBusiness.update(req.params._id, item)
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
			this._docBusiness.remove(req.params._id)
				.then((result: any) => res.send({ success: true }))
				.catch((error: any) => res.send({ success: false, error }));
		}
		catch (e) {
			console.log(e);
			res.send({ success: false, error: Constants.messages.error.BAD_REQUEST });
		}
	}
}
