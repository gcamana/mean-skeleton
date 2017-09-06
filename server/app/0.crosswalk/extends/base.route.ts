import * as express from 'express';
let router = express.Router();

export class BaseRoutes {

	private _docController: any;
	private _identity: string;

	constructor(
		private Identity: string,
		private DocController: any
	) {
		this._identity = Identity;
		this._docController = new DocController();
	}

	get routes() {
		let controller = this._docController;

		router.get(`/${this._identity}`, controller.query);
		router.get(`/${this._identity}/:_id`, controller.findById);
		router.post(`/${this._identity}`, controller.create);
		router.put(`/${this._identity}/:_id`, controller.update);
		router.delete(`/${this._identity}/:_id`, controller.remove);

		return router;
	}
}

Object.seal(BaseRoutes);
