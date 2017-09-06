import * as express from 'express';

import { BaseRoutes } from './../0.crosswalk/extends/base.route';
import { UserController } from './../2.controllers/user.controller';

let router = express.Router();

export class UserRoutes extends BaseRoutes {

	constructor() {
		super('users', UserController);
	}

}

Object.seal(UserRoutes);
