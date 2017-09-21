import * as express from 'express';
import * as path from 'path';

import { AllRoutes } from './1.routes/AllRoutes';

export class Routing {

	static init(app: any) {

		app.use('/', express.static(__dirname + '/../../client'));
		app.use('/api', new AllRoutes().routes);

		app.use((req: any, res: any, next: any) => {
			if (path.extname(req.path).length > 0) {
				// normal static file request
				next();
			} else {
				// redirect all html requests to `index.html`
				res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
			}
		});
	}

}
