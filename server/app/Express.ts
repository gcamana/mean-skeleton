import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as morgan from 'morgan';
import * as path from 'path';
import * as cors from 'cors';

export class Express {

	static init(app: any) {
		app.use(compress());
		app.use(bodyParser.json({ limit: '5mb' }));
		app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

		app.use(morgan('dev'));
		app.use(cors({ origin: '*' }));
	}

}
