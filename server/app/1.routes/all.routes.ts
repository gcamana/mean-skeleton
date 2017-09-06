import * as express from 'express';

import { DogRoutes } from './dog.route';
import { UserRoutes } from './user.route';

let app = express();

export class AllRoutes {

	get routes() {
		app.use('/', new UserRoutes().routes);
		app.use('/', new DogRoutes().routes);

		return app;
	}
}
