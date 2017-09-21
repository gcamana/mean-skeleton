"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Express_1 = require("./app/Express");
var Routing_1 = require("./app/Routing");
var app = express();
Express_1.Express.init(app);
Routing_1.Routing.init(app);
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
    console.log('\x1b[33m', '------------------------------------------------------');
    console.log('\x1b[33m', '	      MEAN Skeleton listening on port ' + app.get('port'));
    console.log('\x1b[33m', '------------------------------------------------------');
});
//# sourceMappingURL=server.js.map