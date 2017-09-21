import * as express from 'express';

import { DogRoutes } from './DogRoutes';
import { UserRoutes } from './UserRoutes';

let app = express();

export class AllRoutes {

	get routes() {
		app.use('/', new UserRoutes().routes);
		app.use('/', new DogRoutes().routes);

		return app;
	}
}
