import * as express from 'express';

import { Express } from './app/Express';
import { Routing } from './app/Routing';
import { DataAccess } from './app/DataAccess';

let app = express();

Express.init(app);

Routing.init(app);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
	console.log('\x1b[33m', '------------------------------------------------------');
	console.log('\x1b[33m', '	      MEAN Skeleton listening on port ' + app.get('port'));
	console.log('\x1b[33m', '------------------------------------------------------');
});
